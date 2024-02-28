import React, { useState, useContext, useEffect } from "react"
import axios from "axios"

export const UserContext = React.createContext()


export default function UserProvider(props) {

  const userAxios = axios.create()

  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
  })


  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    issues: [],
    errMsg: ""
  }


  const [userState, setUserState] = useState(initState)
  const [allIssues, setAllIssues] = useState([])
  const [comments, setComments] = useState([])

 

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token

        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  };

  function login(credentials) {
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserIssues()
        getAllIssues()
        getComments()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token

        }))
      })
      .catch(err => handleAuthErr(err.response?.data.errMsg))
  };

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issues: []
    })
  };

  function handleAuthErr(errMsg) {
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  function addIssue(newIssue) {
    userAxios.post("api/issues", newIssue)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function getUserIssues() {
    userAxios.get("/api/issues/findUser/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }


  function getAllIssues() {
    userAxios.get("/api/issues/all")
      .then(res => setAllIssues(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function getComments() {
    userAxios.get("/api/comments/all")
      .then(res => setComments(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  // console.log(comments)

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        handleAuthErr,
        resetAuthErr,
        addIssue,
        getAllIssues,
        allIssues,
        getUserIssues,
        comments,
        setComments,
        userAxios,
        setAllIssues,
        setUserState
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
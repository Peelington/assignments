import React, { useState, useContext, useEffect, createContext } from "react";
import axios from 'axios'


 export const ExerciseContext = createContext()

 export default function ExerciseProvider(props) {

  const userAxios = axios.create()

  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
  })


  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    goal: [],
    errMsg: ""
  }


  const [userState, setUserState] = useState(initState)

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

  function addGoal(newGoal) {
    userAxios.post("/api/goal", newGoal)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          goal: [...prevState.goal, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function getExercises(exercise){
    axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${exercise}`)
    .then()

  }


  return (
    <ExerciseContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        resetAuthErr,
        addGoal
      }}>
      {props.children}
    </ExerciseContext.Provider>
  )
}

import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.jsx'
import Issue from './Issue.jsx'
import IssueList from './IssueList.jsx'
import IssueForm from './IssueForm.jsx'

export default function Profile() {
  const {
    user: { username },
    addIssue,
    issues,
    getUserIssues
  } = useContext(UserContext)

  // console.log(issues)
  useEffect(()=>{
    getUserIssues()
  }, [])
  

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Issue</h3>
      <IssueForm addIssue={addIssue} />
      <h3>Current issues being discused</h3>
      <IssueList issues={issues} />
    </div>
  )
}
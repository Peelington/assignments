import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider'
import Issue from './Issue'
import IssueList from './IssueList'



export default function Public() { 
  useEffect(()=>{
    getAllIssues()
  }, [])
  
  const { allIssues, getAllIssues } = useContext(UserContext)


  const everyIssue = allIssues.map(issue => 
  <Issue
  {...issue}
  key={issue._id}
  /> )
  // console.log(allIssues)


  return (
    <div className="public">
      {everyIssue}
    </div>
  )
}
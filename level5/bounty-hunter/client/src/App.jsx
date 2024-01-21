import { useEffect, useState } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
import AddBountyForm from './components/AddBoutyForm'
import './App.css'

function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get('/api/bounties')
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))    
  }

  function addBounty(newBounty){
    axios.post('/api/bounties', newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))
  }

  function deleteBounty(bountyId){
    axios.delete(`/api/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId ))
    })
    .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId){
    axios.put(`/api/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }

  function handleFilter(e){
    axios.get(`/api/bounties/search/type?type=${e.target.value}`)
    // .then(res => console.log(res))
    // .catch (err => console.log(err))
    .then(res => setBounties(res.data))
    .catch (err => console.log(err))
  }


  useEffect(() => {
    getBounties()
  }, [])

  return (
    <>
      <AddBountyForm 
        submit = {addBounty}
        btnText = "add Bounty"
      />

      <h4>Filter Bounties by Faction</h4>
      
      <select onChange={handleFilter} className='filter-form'> Select Faction 
        <option> -Faction- </option>
        <option value="Sith">Sith</option>
        <option value="Jedi">Jedi</option>
      </select>

      <div className = 'bountyContainer'>
        {bounties && bounties.map(bounty => 
          <Bounty
            {...bounty} 
            key={bounty.firstName}
            deleteBounty = {deleteBounty}
            editBounty = {editBounty}
            /> )}
      </div>
    </>
  )
}

export default App

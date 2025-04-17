import { useState } from 'react'
import TeamMemberCard from './components/TeamMemberCard'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const Data = [
    {id:1, name:"Jhon Doe", title:"Software Engineer"},
    {id:2, name:"Jishnu kumar", title:"Civil Engineer"},

  ]
  return(
    <div> 
      <h1> Team Member Card Component</h1>
      {Data.map((e)=>(
        <TeamMemberCard key = {e.id} {...e}/>
      ))}
    </div>
  )
}

export default App

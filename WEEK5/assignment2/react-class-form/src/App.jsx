import { useState } from 'react'
import "./App.css";

const App=() => {
  const [name, setName]= useState ("") 
   const [email, setEmail]= useState ("") 

   const handleNameChange= (e) => {
     setName(e.target.value);
   }

   const handleEmailChange = (e) => {
     setEmail(e.target.value);
   };


   const handleSubmit =(e) =>{
    e.preventDefault ()

   }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} value={name} placeholder=' Enter Name' type='text' />
         <input onChange={handleEmailChange} value={email} placeholder=' Enter Email' type='email' />
          <input type='Submit' />
      </form>
    </>
  )
}

export default App

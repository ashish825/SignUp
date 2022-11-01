import { useState } from "react"
export default function Form(){
   const [name,setName]=useState('')
   const [father,setFather]= useState('')
   const [email,setEmail]=useState('')
   const [address, setAddress]= useState('')
   const [mobile, setMobile]= useState('')
   const [dob, setDob]= useState('')
   const [password,setPassword]=useState('')
   const handleName=(e)=> 
   setName(e.target.value)
   const handleFather=(e)=>
   setFather(e.target.value)
   const handleEmail=(e)=>
   setEmail(e.target.value)
   const handleAddress=(e)=>
   setAddress(e.target.value)
   const handleMobile=(e)=>
   setMobile(e.target.value)
   const handleDob=(e)=>
   setDob(e.target.value)
   const handlePassword=(e)=>
   setPassword(e.target.value)
   const handleSubmit=(e)=>
   {
    e.preventDefault()
    console.log()
   }
    return(
        <div>
            <h1>User Registeration</h1>
            <form>
    <label className="label">Name</label>
    <input onChange={handleName} className="input" value={name} type="text"/> 
    <label className="label">Father's Name</label>
    <input onChange={handleFather} className="input" value={father} type="text"/>
    <label className="label">Email</label>
    <input onChange={handleEmail} className="input" value={email} type="email"/>
    <label className="label">Address</label>
    <input onChange={handleAddress} className="input" value={address} type="text"/>
    <label className="label">Mobile No.</label>
    <input onChange={handleMobile} className="input" value={mobile} type="number"/>
    <label className="label">DateOfBirth</label>
    <input onChange={handleDob} className="input" value={dob} type="date"/>
    <label className="label">Password</label>
    <input onChange={handlePassword} className="input" value={password} type="password"/>
    <button onClick={handleSubmit} className="btn" type="Submit">
        Submit
        </button>
    </form>
        </div>
    );
}
import React from 'react'
import { useState } from 'react';
import "../requiredData/subscription.css"
import Spinner from './Spinner';

export default function Subscription() {
  const [name, setUser] = useState()
  const [email, setEmail] = useState()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [genErr, setGenErr] = useState(false)
  const [loader, setLoader] = useState(false)
  const [emailerr, setemailerr] = useState(false)
  const [alert, setAlert] =useState()
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setUser(e.target.value)
    }
    else if (e.target.name === "contest"){
      if (!alert){
        setAlert(e.target.value)
      }
      else{
        if(alert.includes(e.target.value)){
          let new_alert = alert.split(",").filter((ele)=>{return ele!==e.target.value})
          setAlert(new_alert.join(","))
        }
        else{
          setAlert(alert + ","+ e.target.value)
        }
      }
    }
    else {
      setEmail(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(true)
    const response = await fetch(`${process.env.REACT_APP_host}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, alert })
    })
    setLoader(false)
    if (response.status === 200) {
      setSuccess(true)
      setError(false)
      setEmail("")
      setUser("")
      setTimeout(() => {
        setSuccess(false)
      }, 6000);
    }
    else if (response.status === 400) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 6000);
    }
    else if (response.status === 406) {
      setemailerr(true)
      setTimeout(() => {
        setemailerr(false)
      }, 6000);
    }
    else {
      setGenErr(true)
      setTimeout(() => {
        setGenErr(false)
      }, 6000);
    }
  }
  return (<>class=
    <div style={{ position: "absolute", top: "7vh", width: "100%" }}>
      {success && <div className="alert alert-success" role="alert">
        Verification Email Sent
      </div>}
      {error && <div className="alert alert-danger" role="alert">
        A user with this Email is already exist!!!
      </div>}
      {emailerr && <div className="alert alert-danger" role="alert">
        Invalid Email or alert field is empty
      </div>}
      {genErr && <div className="alert alert-danger" role="alert">
        Something went wrong <br></br>
        Internal Server Error <br></br>
        Please try again
      </div>}
      {loader && <Spinner />}
    </div>
    <div className="container_">
      <h1 className="heading">Subscription Form</h1>
      <p className="subheading">You will get Information regarding upcoming contest and reminder</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="cont">
          <label htmlFor="name">Name: </label>
          <input style={{ padding: "5px" }} type="text" name="name" id="name" value={name} onChange={handleChange} required />
        </div>
        <div className="cont">
          <label htmlFor="email">Email: </label>
          <input style={{ padding: "5px" }} type="email" name="email" id="email" value={email} onChange={handleChange} required />
        </div>
       
        <div className="cont">
        <label htmlFor="contest">Select: </label>
          <select name="contest" id="contest" onChange={handleChange}>
            <option disabled selected>Select multiple option</option>
            <option value='Code Chef' >Code Chef</option>
            <option value='Codeforces' >Codeforces</option>
            <option value='Leet Code'>Leet Code</option>
            <option value='Kick Start' >Kick Start</option>
          </select>
        </div>
        <div className="cont">
          <label htmlFor="contest">Alert: </label>
          <input style={{ padding: "2px",width: "24vw" }} type="text" name="alert" id="alert" value= {alert} readOnly/>
          <button className='btn__' style={{backgroundColor : "transparent", color: "white", border: "none"}} onClick={(e)=>{ e.preventDefault(); let n = alert.split(",");n.pop(); setAlert(n.join(","))}}><i class="fa-sharp fa-solid fa-delete-left"></i></button>
        </div>
          <div>
        <button className='btn__' type="submit">Subscribe</button>
          </div>
      </form>
    </div>
  </>
  )
}
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
  const [loader,setLoader] = useState(false)
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setUser(e.target.value)
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
      body: JSON.stringify({name, email})
    })
    setLoader(false)
    if (response.status === 200) {
      setSuccess(true)
      setError(false)
      setEmail("")
      setUser("")
      setTimeout(() => {
        setSuccess(false)
      }, 5000);
    }
    else if (response.status === 400) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 5000);
    }
    else {
      setGenErr(true)
      setTimeout(() => {
        setGenErr(false)
      }, 5000);
    }
  }
  return (<>
  <div style={{position : "absolute", top : "7vh", width : "100%"}}>
    {success && <div class="alert alert-success" role="alert">
      Congratulations You have successfully subscribed.<br></br>
      Email has been sent.
    </div>}
    {error && <div class="alert alert-danger" role="alert">
      Sorry a user with this Email is already exist!!!
    </div>}
    {genErr && <div class="alert alert-danger" role="alert">
      Something went wrong <br></br>
      Internal Server Error <br></br>
      Please try again
    </div>}
    {loader && <Spinner/>}
    </div>
    <div class="container_">
      <h1 class="heading">Subscription Form</h1>
      <p class="subheading">You will get Information regarding upcoming contest and reminder</p>
      <form class="form" onSubmit={handleSubmit}>
        <div className="cont">
          <label for="name">Name: </label>
          <input style={{ padding: "5px" }} type="text" name="name" id="name" value={name} onChange={handleChange} />
        </div>
        <div className="cont">
          <label for="email">Email: </label>
          <input style={{ padding: "5px" }} type="email" name="email" id="email" value={email} onChange={handleChange} />
        </div>
        <button className='btn__' type="submit"> Subscribe</button>
      </form>
    </div>
  </>
  )
}


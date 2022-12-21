import React from 'react'
import { useState } from 'react';
import "../requiredData/subscription.css"
import Spinner from './Spinner';

export default function SubscriptionCancel() {
  const [email, setEmail] = useState()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [genErr, setGenErr] =useState(false)
  const [loader , setLoader] =useState(false)
  const handleChange = (e) => {
    if (e.target.name === "email"){
      setEmail(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(true)
      const response = await fetch(`${process.env.REACT_APP_host}/unsubscribeMe`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
      })
      setLoader(false)
      if (response.status === 200) {
        setSuccess(true)
        setError(false)
        setEmail("")
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
      You have successfully unsubscribed.<br/>
    </div>}
    {error && <div class="alert alert-danger" role="alert">
      User with this email does not exist.
    </div>}
    {genErr && <div class="alert alert-danger" role="alert">
      Something went wrong <br/>
      Please try again
    </div>}
    {loader && <Spinner/>}
    </div>
    <div class="container_">
      <h1 class="heading">Unsubscription Form</h1>
      <p class="subheading">We are sad to see you go :(</p>
      <form class="form" onSubmit={handleSubmit}>
        <div className="cont">
          <label for="email">Email: </label>
          <input style={{padding : "5px"}} type="email" name="email" id="email" value={email} onChange={handleChange} />
        </div>
        <button className='btn__' type="submit">Unsubscribe</button>
      </form>
    </div>
  </>
  )
}


import React from 'react'
import { useState } from 'react';
import "../requiredData/subscription.css"
import Spinner from './Spinner';

const Update = () => {
    const [email, setEmail] = useState()
    const [alert, setAlert] = useState()
    const [loader, setLoader] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [msg, setMsg] = useState()


    const handleChange = (e) => {
        if (e.target.name === "contest") {
            if (!alert) {
                setAlert(e.target.value)
            }
            else {
                if (alert.includes(e.target.value)) {
                    let new_alert = alert.split(",").filter((ele) => { return ele !== e.target.value })
                    setAlert(new_alert.join(","))
                }
                else {
                    setAlert(alert + "," + e.target.value)
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
        var response = await fetch(`${process.env.REACT_APP_update}/updatedata`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, alert })
        })
        setLoader(false)
        if (response.ok) {
            response = await response.json()
            setSuccess(true)
            setMsg(response.msg)
            setEmail("")
            setTimeout(() => {
                setSuccess(false)
              }, 5000);

        }
        else {
            response = await response.json()
            setError(true)
            setMsg(response.msg)
            setTimeout(() => {
                setError(false)
              }, 5000);
        }
    }
    return (
        <>
            <div style={{ position: "absolute", top: "7vh", width: "100%" }}>
                {success && <div className="alert alert-success" role="alert">
                    {msg}
                </div>}
                {error && <div className="alert alert-danger" role="alert">
                    {msg}
                </div>}
                {loader && <Spinner />}
            </div>
            <div className="container_">
                <h1 className="heading">Update Form</h1>
                <p className="subheading">Update your Alert Choices</p>
                <form className="form" onSubmit={handleSubmit}>
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
                        <input style={{ padding: "2px", width: "24vw" }} type="text" name="alert" id="alert" value={alert} readOnly />
                        <button className='btn__' style={{ backgroundColor: "transparent", color: "white", border: "none" }} onClick={(e) => { e.preventDefault(); let n = alert.split(","); n.pop(); setAlert(n.join(",")) }}><i class="fa-sharp fa-solid fa-delete-left"></i></button>
                    </div>
                    <div>
                        <button className='btn__' type="submit">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Update

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

                    <div style={{ margin: "auto" }}>
                        <label htmlFor="contest">Alert: </label>
                        <span className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle xyz" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Multiple
                            </button>
                            <ul className="dropdown-menu xyz">
                                <li><div style={{ marginLeft: "7px" }}>Codeforces <input type="checkbox" name='contest' style={{ float: "right", marginRight: "9px", marginTop: "7px" }} value='Codeforces' onClick={handleChange} /></div> </li>
                                <li><div style={{ marginLeft: "7px" }} >Codechef <input type="checkbox" name='contest' style={{ float: "right", marginRight: "9px", marginTop: "7px" }} value='Code Chef' onClick={handleChange} /></div> </li>
                                <li><div style={{ marginLeft: "7px" }} > Leetcode <input type="checkbox" name='contest' style={{ float: "right", marginRight: "9px", marginTop: "7px" }} value='Leet Code' onClick={handleChange} /></div></li>
                                <li><div style={{ marginLeft: "7px" }} > Kickstart <input type="checkbox" name='contest' style={{ float: "right", marginRight: "9px", marginTop: "7px" }} value='Kick Start' onClick={handleChange} /></div></li>
                            </ul>
                        </span>
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

import React from 'react'
import { Link } from 'react-router-dom'
import "../requiredData/front.css"
export default function Front(props) {
    return (
        <div className="aboutus">
            <h1 className='head'>{props.heading}</h1>
            <p>{props.def}</p>
            <p> Click Below</p>
            <button type='button' className="btn_" style={{backgroundColor: "#9a94ff"}}><Link to={props.url} style={{color: "white"}}>{props.btn}</Link></button>
        </div>
    )
}

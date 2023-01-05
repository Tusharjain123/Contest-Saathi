import React from 'react'
import "../requiredData/front.css"
export default function Front(props) {
    return (
        <div className="aboutus">
            <h1 className='head abc'>{props.heading}</h1>
            <p>{props.def}</p>
        </div>
    )
}

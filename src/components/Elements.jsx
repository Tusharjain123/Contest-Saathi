import React from 'react'

export default function Elements(props) {
    return (
        <tr>
            <th scope="row">{props.serialno}</th>
            <td>{props.name}</td>
            <td style={{fontWeight : "bolder"}}>{props.sdate}</td>
            <td>{props.time}</td>
            <td>{props.duration}</td>
            <td>{props.status}</td>
            <td><a href={props.url==="Not"?"Not exist":props.url} target ="_blank" rel="noreferrer">Link</a></td>
        </tr>
    )
}

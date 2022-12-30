import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const baseLocation = useLocation().pathname
    let baseStyle = {}
    if (baseLocation === "/contest"){
       baseStyle = {
        position : "sticky" , 
        top: "0px", 
        minWidth: "551px"
      }
    }
    else{
      baseStyle = {
        position : "sticky" , 
        top: "0px"
      }
    }

    return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mx-3" style={baseStyle}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{fontWeight : "bold", color: "#9a94ff",fontFamily: "'Raleway', sans-serif"}} >Contest Saathi</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contest">Contest Info</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/subscription">Subscription</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    )
}
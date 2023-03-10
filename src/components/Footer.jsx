import React from 'react'

const Footer = () => {
  return (
    <div style={{color : "white", textAlign : 'center', backgroundColor: "transparent",width: "98vw", fontFamily: "'Roboto Mono', monospace",  position: "absolute",margin: "10px 5px", bottom: "0px"}}>
    <div >
      ©️ Contest Saathi 2023 
    </div>
    <div>
        Follow me on   
        <a href="https://github.com/Tusharjain123" target="_blank" rel="noreferrer" style={{margin: "0px 10px"}}><i className="fa-brands fa-github"/></a> 
        <a href="https://www.linkedin.com/in/tushar-jain-a55222241/" target= "_blank" rel="noreferrer" style={{margin: "0px 10px"}}><i className="fa-brands fa-linkedin-in"/></a>
        <a href="https://twitter.com/TusharJ84868317" target="_blank" rel="noreferrer" style={{margin: "0px 10px"}}><i className="fa-brands fa-twitter"/></a>
    </div>
    <div>Made with ❤️ by Tushar</div>
    </div>
  )
}

export default Footer

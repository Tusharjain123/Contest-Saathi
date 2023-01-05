import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Front from './Front';
import "../requiredData/background.css"
const Background = () => {
    return (
        <div style={{ fontFamily: "'Raleway', sans-serif" }}>
            <h1 className='text-center welcome' style={{margin : "4vh 0px"}}>Welcome to <span>Contest Saathi</span></h1>
            <h3 className='text-center line'>Here, You will get the latest Contest Details</h3>
            <div className='d-flex flex-wrap justify-content-evenly'>
                <Link to = "/contest" style={{color: "black"}}><Front heading="Contest Details" def="Codeforces, Codechef, Leetcode.. etc contest info you can get it from here." btn="Contest"/></Link>
                <Link to= "/subscription"  style={{color: "black"}}><Front heading="Subscription" def="For Getting Personalised contest alert you can subscribe to our newsletter." btn="Subscription" /></Link>
            </div>
            <Footer/>
        </div>
    ) 
}

export default Background
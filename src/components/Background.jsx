import React from 'react'
import Footer from './Footer';
import Front from './Front';

const Background = () => {
    return (
        <div style={{ fontFamily: "'Raleway', sans-serif" }}>
            <h1 className='text-center' style={{ marginTop: "4vh", color: 'white', fontSize: "4vw" }}>Welcome to <span style={{fontWeight : "bold", color: "#9a94ff"}}>Contest Saathi</span></h1>
            <h3 className='text-center' style={{ color: 'white', fontSize: "3vw" }}>Here, You will get the latest Contest Details</h3>
            <div className='d-flex flex-wrap justify-content-evenly'>
                <Front heading="Contest Details" def="Codeforces, Codechef, Leetcode.. etc contest info you can get it from here." btn="Contest" url="./contest" />
                <Front heading="Subscription" def="For Getting Personalised contest alert you can subscribe to our newsletter." btn="Subscription" url="/subscription" />
            </div>
            <Footer/>
        </div>
    ) 
}

export default Background

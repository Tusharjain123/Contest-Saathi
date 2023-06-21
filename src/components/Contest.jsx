import React, { useState } from 'react'
import Spinner from './Spinner'
import "../requiredData/contest.css"
import Elements from './Elements'

export default function Data() {
    const [check, setCheck] = useState(false)
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState()
    async function contestData(value) {
        const contest_data = await fetch(process.env.REACT_APP_contest + value);
        var dat = await contest_data.json()
        if (value ==="code_chef" || value === "leet_code"){
            dat = dat.reverse()
        }
        if (dat.length === 0) {
            setData([{
                name: "No Contest",
                url: "#",
                time: "None",
                date: "None",
                duration: "None",
                status: "None"
            }]
            )
        }
        else {
            setData(dat)
        }
    }
    const handleClick = async (e) => {
        setCheck(false)
        setLoader(true)
        const val = e.target.alt;
        await contestData(val)
        setCheck(true)
        setLoader(false)
        setCheck(true)
    }
    function secondsToTime(e) {
        const d = Math.floor(e / (24 * 3600));
        if (d > 0) {
            const h = Math.floor((e % (24 * 3600)) / 3600).toString().padStart(2, "0"),
                m = Math.floor((e % 3600) / 60).toString().padStart(2, "0")
            return d + " days " + h + " hr " + m + " min ";
        }
        else {
            const h = Math.floor(e / 3600).toString().padStart(2, "0"),
                m = Math.floor((e % 3600) / 60).toString().padStart(2, "0")
            return h + " hr " + m + " min ";
        }
    }
    return (
        <div>
            {/* First Row content */}
            <div className="container text-dark rounded p-4" style={{ backgroundColor: "transparent"}}>
                <h1 className='text-center' style={{ marginBottom: "2vh", color: "white" }}>Select the contest website</h1>
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    <div className='image' style={{padding: "17px 1vw", backgroundColor : "white", margin: "10px"}} >
                        <img style={{ width: "168px", height: "fit-content"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/2560px-Codeforces_logo.svg.png" alt="codeforces" onClick={handleClick} />
                    </div>
                    <div className='image'  style={{padding: "15px 1vw", backgroundColor : "white", margin: "10px"}}>
                        <img style={{ width: "168px", height: "fit-content"}} src="https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_logo.png" alt="hacker_earth" onClick={handleClick} />
                    </div>
                    <div className='image'  style={{padding: "11px 1vw", backgroundColor : "white", margin: "10px"}}>
                        <img style={{ width: "168px", height: "fit-content" }} src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg" alt="leet_code" onClick={handleClick} />
                    </div>
                   </div>
                {/*Second row content  */}
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    <div className='image'style={{backgroundColor : "white", margin: "10px"}}>
                    <img style={{ width: "168px" }} src="/atcoder.png" alt="at_coder" onClick={handleClick} />
                    </div>
                    <div className='image'  style={{padding: "8px 1vw", backgroundColor : "white", margin: "10px"}}>
                        <img style={{ width: "168px" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png" alt="code_chef" onClick={handleClick} />
                    </div>
                    <div className='image' style={{backgroundColor : "white", margin: "10px"}} >
                        <img style={{ width: "168px", height: "fit-content" }} src="https://images.ctfassets.net/kbkgmx9upatd/61FRsAdFv2jjoXw5UxZne6/a73fff395a8a1674e73c727d20bf1998/topcoder.logo.png" alt="top_coder" onClick={handleClick} />
                    </div></div>
            </div>
            <div style={{display: "block", margin: "auto"}}>
            {loader && <Spinner />}
            </div>
            <div className="container my-5">
                <table className="table table-striped table-bordered table-primary text-dark table-hover tabledata" style={{ borderColour: "white" }}>
                    <thead>
                        <tr>
                            <th scope="col">Serial number</th>
                            <th scope="col">Contest Name</th>
                            <th scope="col">Date </th>
                            <th scope="col">Time(IST 24 hr format)</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Status</th>
                            <th scope="col">Contest Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {check && data.map((each => {
                            let sdt = new Date(each.start_time)
                            let edt = new Date(each.end_time)
                            return (
                                <Elements
                                    key={each.url}
                                    serialno={data.indexOf(each) + 1}
                                    name={each.name}
                                    sdate={sdt.toDateString()}
                                    time={`${sdt.toTimeString().slice(0, 5)} to ${edt.toTimeString().slice(0, 5)}`}
                                    duration={secondsToTime(each.duration)}
                                    status={each.status === "CODING" ? "Live" : "Not Live"}
                                    url={each.url}
                                />)
                        }))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
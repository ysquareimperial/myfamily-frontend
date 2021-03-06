import React from 'react'
import '../Index/Mobile.css'
import MobileNavbar from '../MobileNavbar/MobileNavbar'
export default function MemoriesComp() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="memories-text">
                                <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Memories</p>
                                <p className="text-white">myfamily helps you to look back on all your posts, events and visits as memories.</p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <br></br>
            <MobileNavbar/>
        </div>
    )
}
import React, { useState } from 'react'
import './HomePage.css'
import image from '../HomePage/family1.jpg'
import SignInRep from '../Sign/SignInRep'


export default function HomePage() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <div className="row m-0 p-0" style={{}}>
                <div className="col-md-5 pt-1 left">
                    <SignInRep />
                </div>
                
                <div className="col-md-7 right px-0 py-0 right" style={{
                    position: "relative",
                    textAlign: "center"
                }}>
                    <img src={image} alt="myfamily" />
                    <div style={{
                        position: "absolute", top: 200, left: 30,
                        background: "rgba(128, 128, 128, 0.6)"
                    }} className="border rounded">
                        <div>
                            <h1 className="lead text-white" style={{ fontSize: 50 }}>myfamily</h1>
                            <h1 className="lead text-white p-3">
                                “Family and friends are hidden treasures,
                                seek them and enjoy their riches.”
                                <p className="text-white">–Wanda Hope Carter</p>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
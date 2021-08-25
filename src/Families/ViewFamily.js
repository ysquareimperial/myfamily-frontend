import React, { useState } from 'react'
import { useHistory } from 'react-router'
import profileimg from '../Images/yasir.jpeg'
import image2 from '../Images/image.PNG'
export default function ViewFamily() {
    const history = useHistory();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('0');
    const toggle2 = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-8">
                                    <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Family Name</p>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-outline-primary" onClick={toggle} style={{ borderRadius: 20, float: "right", marginTop: 5 }}>Edit Family</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={image2} alt="family image" style={{ borderColor: '#0275d8', borderRadius: 10, border: 1, borderStyle: 'solid' }} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-8">
                                    <h4>Members</h4>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: 'right' }}>Add members</button>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-7 text-white mt-2 ml-1">
                                    <p>Yasir Ado Hassan <span className="text-secondary">@ysquareimperial</span></p>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginLeft: 95 }}>Chat</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
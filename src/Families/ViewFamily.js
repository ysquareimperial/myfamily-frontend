import React, { useState } from 'react'
import ProfileTab from '../Profile/ProfileTab';
export default function Profile(profile, handleProfileChange) {
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
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
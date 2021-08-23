import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { GoLocation } from "react-icons/go";
import profile from '../Images/yasir.jpeg'

export default function EventsComp() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Events</p>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: "right", marginTop: 5 }}>Create an Event</button>
                        </div>
                    </div>
                    <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10 }}>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={profile} className="" alt="proifleimage" style={{ borderRadius: "" }} />
                            </div>
                            <div className="col-md-9">
                                <h5>Naming Ceremony of Yasir</h5>
                                <p style={{ color: "white" }}> at Minna Events Center, Nasarawa, Kano<GoLocation />4:00 PM<IoTimeOutline /></p>
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>Generate & Share Card for the Event</button>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: "right", marginTop: 5 }}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10 }}>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={profile} className="" alt="proifleimage" style={{ borderRadius: "" }} />
                            </div>
                            <div className="col-md-9">
                                <h5>Naming Ceremony of Yasir</h5>
                                <p style={{ color: "white" }}> at Minna Events Center, Nasarawa, Kano<GoLocation />4:00 PM<IoTimeOutline /></p>
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>Generate & Share Card for the Event</button>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: "right", marginTop: 5 }}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10 }}>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={profile} className="" alt="proifleimage" style={{ borderRadius: "" }} />
                            </div>
                            <div className="col-md-9">
                                <h5>Naming Ceremony of Yasir</h5>
                                <p style={{ color: "white" }}> at Minna Events Center, Nasarawa, Kano<GoLocation />4:00 PM<IoTimeOutline /></p>
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>Generate & Share Card for the Event</button>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: "right", marginTop: 5 }}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

        </div>
    )
}


// name
// date
// time
// location
// privacy
// description
// image
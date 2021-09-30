import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { GoLocation } from "react-icons/go";
import profile from '../Images/yasir.jpeg'
export default function Visitation() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            <div>
                                <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Visitations</p>
                                <p style={{color: "#ffffff" }}>Enable Notifications</p>
                            </div>
                        </div>
                        <div className="col-md-3  pt-2">
                            <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: 'right' }}>Create a Visit</button>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10, paddingBottom: 10 }}>
                                <div className="row">
                                    <div className="col-md-11">
                                        <h5>Visit</h5>
                                        <p className="text-white">by 4:00 PM <IoTimeOutline /></p>
                                        <p style={{ color: "white" }}> at Minna Events Center, Nasarawa, Kano <GoLocation /></p>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11">
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginRight: 5 }}>Edit</button>
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>Delete</button>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                            <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10, paddingBottom: 10 }}>
                                <div className="row">
                                    <div className="col-md-11">
                                        <h5>Visit</h5>
                                        <p className="text-white">by 4:00 PM <IoTimeOutline /></p>
                                        <p style={{ color: "white" }}> at Minna Events Center, Nasarawa, Kano <GoLocation /></p>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11">
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginRight: 5 }}>Edit</button>
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>Delete</button>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                            <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10, paddingBottom: 10 }}>
                                <div className="row">
                                    <div className="col-md-11">
                                        <h5>Visit</h5>
                                        <p className="text-white">by 4:00 PM <IoTimeOutline /></p>
                                        <p style={{ color: "white" }}> at Minna Events Center, Nasarawa, Kano <GoLocation /></p>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11">
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginRight: 5 }}>Edit</button>
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>Delete</button>
                                    </div>
                                    <div className="col-md-1"></div>
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
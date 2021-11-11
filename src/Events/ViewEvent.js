import React from 'react'
import { IoTimeOutline, IoCalendarClearOutline, IoPeopleOutline, IoEllipsisVerticalOutline, IoPersonOutline, IoPricetagsOutline } from 'react-icons/io5'
import { GoLocation } from "react-icons/go";
import profile from '../Images/yasir.jpg'
import MobileNavbar from '../MobileNavbar/MobileNavbar';
export default function VeiwEvent() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-8">
                            <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Event Info</p>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: "right", marginTop: 5 }}>Create an Event</button>
                        </div>
                    </div>
                    <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10 }}>
                        <div className="col-md-12 text-white">
                            <div className="row">
                                <div className="col-md-11">
                                    <p style={{ fontWeight: "bold", fontSize: 20, color: "#ffffff" }}>Details</p>
                                </div>
                                <div className="col-md-1">
                                    <IoEllipsisVerticalOutline size="1.5em" color="#0275d8" style={{ float: "right" }} />
                                </div>
                            </div>

                            <img src={profile} className="" alt="proifleimage" style={{ height: 150 }} />
                            <p className="text-primary" style={{ fontWeight: "bold", fontSize: 20, color: "#ffffff" }}>Naming Ceremony of Yasir</p>
                            <p><IoCalendarClearOutline size="1.5em" /> 0 Jan 2020</p>
                            <p><IoTimeOutline size="1.5em" /> 4:00 PM</p>
                            <p><IoPeopleOutline size="1.5em" /> 200 People are invited</p>
                            <p><IoPersonOutline size="1.5em" /> Event by Yasir</p>
                            <p><GoLocation size="1.5em" /> Minna Events Center, Nasarawa, Kano</p>
                            <p><IoPricetagsOutline size="1.5em" /> Price, <b style={{ color: "grey" }}>None</b></p>
                        </div>
                    </div>

                </div>
            </div>
            <br></br>
            <MobileNavbar />
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
import React from 'react'
import image from './Index/mf-logo.png'
import { Link } from 'react-router-dom'
import { GoSignOut } from 'react-icons/go'
import { IoSettingsOutline, IoNotificationsCircleOutline, IoPersonCircleOutline} from "react-icons/io5"

export default function Navbar() {
    return(
    <div className="row row1 p-3 fixed-top mobileNavbar">
                        <div className="col-md-1">
                            <Link to="/">
                                <img className="indxeimg" src={image} alt="mfLogo" />
                            </Link>
                        </div>
                        <div className="col-md-7">
                            <Link to='/families'>
                                <h3 className="famName" style={{
                                    fontWeight: "bolder",
                                    display: "inline-block"
                                }}>Family name will be here.</h3>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to='/home/profile'>
                                <h5 className="hover mr-5" style={{
                                    fontWeight: "bolder",
                                    display: "inline-block",
                                    marginLeft:0
                                }}>
                                    <IoPersonCircleOutline size="2em" color="#0275d8" />user's full name</h5>
                            </Link>
                            <h5 className="hover mt-1 pl-3" style={{
                                fontWeight: "bolder",
                                display: "inline-block",
                                // marginLeft: 5,
                                float:"right"
                            }}>
                                <GoSignOut size="1.7em" color="#0275d8" /></h5>
                            <Link to='/home/notifications'>
                                <h5 className="hover" style={{
                                    fontWeight: "bolder",
                                    display: "inline-block",
                                    // marginLeft:5,
                                    float:"right"
                                }}>
                                    <IoNotificationsCircleOutline size="2em" color="#0275d8" /></h5>
                            </Link>
                            <Link to='/home/settings & privacy'>
                                <h5 className="hover mt-1 pr-3" style={{
                                    fontWeight: "bolder",
                                    display: "inline-block",
                                    // marginLeft: 5,
                                    float:"right"
                                }}>
                                    <IoSettingsOutline size="1.7em" color="#0275d8" /></h5>
                            </Link>
                        </div>
                    </div>
    )
}
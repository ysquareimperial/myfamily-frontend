import React from 'react'
import './IndexPage.css'
import image from './mf-logo.png'
import { Link } from 'react-router-dom'
import { IoSettingsOutline, IoNotificationsCircleOutline, IoVideocamOutline, IoChatbubblesOutline, IoPersonCircleOutline, IoHomeOutline, IoCallOutline, IoPeopleOutline, IoTimerOutline } from "react-icons/io5"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeComp from '../Components/HomeComp'
import FamiliesComp from '../Components/FamiliesComp'
import ChatComp from '../Components/ChatComp'
import VoiceCallComp from '../Components/VoiceCallComp'
import VideoCallComp from '../Components/VideoCallComp'
import EventsComp from '../Components/EventsComp'
import SupportFamComp from '../Components/SupportFamComp'
import MemoriesComp from '../Components/MemoriesComp'
import NotificationsComp from '../Components/NotificationsComp'
import CreateFamily from '../Components/CreateFamily'
import IndexLeftMenu from '../Components/IndexLeftMenu'
import Profile from '../Components/Profile'
import ViewFamily from '../Components/ViewFamily'
import Visitation from '../Components/Visitation'
import SettingsPrivacy from '../Components/SettingsPrivacy'
export default function IndexPage() {
    let date = new Date().getFullYear()
    return (
        <div className="row0">
            <Router>
                <div className="row row1 p-3 ">
                    <div className="col-md-1">
                        <Link to="/">
                            <img className="indxeimg" src={image} alt="mfLogo" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/families'>
                            <h3 className="famName" style={{
                                fontWeight: "bolder",
                                display: "inline-block"
                            }}>Family name will be here.</h3>
                        </Link>
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">
                        <Link to='/profile'>
                            <h5 className="hover mr-5 " style={{
                                fontWeight: "bolder",
                                display: "inline-block"
                            }}>
                                <IoPersonCircleOutline size="2em" color="#0275d8" />@ysquareimperial</h5>
                        </Link>
                    </div>
                    <div className="col-md-2">
                        <Link to='/notifications'>
                            <h5 className="hover" style={{
                                fontWeight: "bolder",
                                display: "inline-block",
                                paddingRight:20
                            }}>
                                <IoNotificationsCircleOutline size="2em" color="#0275d8" /></h5>
                        </Link>
                        <Link to='/settings & privacy'>
                            <h5 className="hover" style={{
                                fontWeight: "bolder",
                                display: "inline-block",
                            }}>
                                <IoSettingsOutline size="1.7em" color="#0275d8" /></h5>
                        </Link>
                    </div>
                </div>

                <div className="row pl-2">
                    <IndexLeftMenu />
                    <div className="col-md-6">
                        <Switch>
                            <Route path="/" exact component={HomeComp} />
                            <Route path="/home" exact component={HomeComp} />
                            <Route path="/families" component={FamiliesComp} />
                            <Route path="/chat" component={ChatComp} />
                            <Route path="/voiceCall" component={VoiceCallComp} />
                            <Route path="/videoCall" component={VideoCallComp} />
                            <Route path="/visitation" component={Visitation} />
                            <Route path="/events" component={EventsComp} />
                            <Route path="/supportFamily" component={SupportFamComp} />
                            <Route path="/memories" component={MemoriesComp} />
                            <Route path="/notifications" component={NotificationsComp} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/settings & privacy" component={SettingsPrivacy} />
                        </Switch>


                    </div>
                    <div className="col-md-3 col3">
                        <h4 className="display-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                            <IoPeopleOutline size="1.3em" color="#0275d8" /> Family Membes...</h4>
                        <div className="">
                            <input style={{
                                backgroundColor: "#04162C",
                                borderRadius: 19,
                                color: 'white',
                                width: 170,
                                alignContent: "center"
                            }} type="search" className="form-control" placeholder="Search a member" />
                        </div>
                        <div className="pt-2">
                            <h6 className="display-4" style={{ fontSize: 15 }}><IoPersonCircleOutline size="2em" color="#0275d8" />Ado Yasir Hassan</h6>
                            <h6 className="display-4" style={{ fontSize: 15 }}><IoPersonCircleOutline size="2em" color="#0275d8" />Ado Yasir Hassan</h6>
                            <h6 className="display-4" style={{ fontSize: 15 }}><IoPersonCircleOutline size="2em" color="#0275d8" />Ado Yasir Hassan</h6>
                            <h6 className="display-4" style={{ fontSize: 15 }}><IoPersonCircleOutline size="2em" color="#0275d8" />Ado Yasir Hassan</h6>
                            <h6 className="display-4" style={{ fontSize: 15 }}><IoPersonCircleOutline size="2em" color="#0275d8" />Ado Yasir Hassan</h6>
                            <h6 className="display-4" style={{ fontSize: 15 }}><IoPersonCircleOutline size="2em" color="#0275d8" />Ado Yasir Hassan</h6>
                        </div>
                    </div>
                </div>
            </Router>
        </div >
    )
}
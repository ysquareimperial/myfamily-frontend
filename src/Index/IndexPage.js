import React from 'react'
import './IndexPage.css'
import image from './mf-logo.png'
import { Link } from 'react-router-dom'
import { GoSignOut } from 'react-icons/go'
import { IoSettingsOutline, IoNotificationsCircleOutline, IoVideocamOutline, IoChatbubblesOutline, IoPersonCircleOutline, IoHomeOutline, IoCallOutline, IoPeopleOutline, IoTimerOutline } from "react-icons/io5"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeComp from '../Home/HomeComp'
import FamiliesComp from '../Families/FamiliesComp'
import ChatComp from '../Chat/ChatComp'
import VoiceCallComp from '../VoiceCall/VoiceCallComp'
import VideoCallComp from '../VideoCall/VideoCallComp'
import EventsComp from '../Events/EventsComp'
import SupportFamComp from '../SupportFamily/SupportFamComp'
import MemoriesComp from '../Memories/MemoriesComp'
import NotificationsComp from '../Notifications/NotificationsComp'
import IndexLeftMenu from './IndexLeftMenu'
import Profile from '../Profile/Profile'
import ViewFamily from '../Families/ViewFamily'
import Visitation from '../Visitations/Visitation'
import SettingsPrivacy from '../Settings/SettingsPrivacy'
import IndexRightMenu from './IndexRightMenu'
import FamilyTreeComp from '../FamilyTree/FamilyTreeComp'
import './Mobile.css'
import ChatMember from '../Chat/ChatMember'
export default function IndexPage() {
    let date = new Date().getFullYear()
    return (
        <div className="row0">
            <br/><br/><br/><br/>
                {/* <div className="row row1 p-3 fixed-top mobileNavbar">
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
                                marginLeft:118
                            }}>
                                <IoPersonCircleOutline size="2em" color="#0275d8" />user's full name</h5>
                        </Link>
                        <h5 className="hover" style={{
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
                            <h5 className="hover" style={{
                                fontWeight: "bolder",
                                display: "inline-block",
                                // marginLeft: 5,
                                float:"right"
                            }}>
                                <IoSettingsOutline size="1.7em" color="#0275d8" /></h5>
                        </Link>
                    </div>
                </div> */}

                <div className="row" style={{marginTop:""}}>
                    <div className="col-md-3">
                        <IndexLeftMenu/>
                    </div>
                    <div className="col-md-6 col55" >
                        <Switch>
                            {/* <Route path="/" exact component={HomeComp} /> */}
                            <Route path="/home" exact component={HomeComp} />
                            <Route path="/home/families" component={FamiliesComp} />
                            <Route path="/home/familyTree" component={FamilyTreeComp} />
                            <Route path="/home/viewFamily" component={ViewFamily}/> 
                            <Route path="/home/chat" exact component={ChatComp} />
                            <Route path="/home/chat-member" exact component={ChatMember} />
                            <Route path="/home/voiceCall" component={VoiceCallComp} />
                            <Route path="/home/videoCall" component={VideoCallComp} />
                            <Route path="/home/visitation" component={Visitation} />
                            <Route path="/home/events" component={EventsComp} />
                            <Route path="/home/supportFamily" component={SupportFamComp} />
                            <Route path="/home/memories" component={MemoriesComp} />
                            <Route path="/home/notifications" component={NotificationsComp} />
                            <Route path="/home/profile" component={Profile} />
                            <Route path="/home/settings & privacy" component={SettingsPrivacy} />
                        </Switch>
                    </div>
                    <div className="col-md-3 col3">
                        <IndexRightMenu />
                    </div>
                </div>
        </div >
    )
}
import React from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { IoWalkSharp, IoNotificationsCircleOutline, IoVideocamOutline, IoChatbubblesOutline, IoPersonCircleOutline, IoHomeOutline, IoCallOutline, IoPeopleOutline, IoTimerOutline } from "react-icons/io5"
import { RiCalendarEventLine } from 'react-icons/ri'
import '../Index/Mobile.css'
export default function MobileNavbar() {
    const location = useLocation()
    const history = useHistory()
    return (
        <div className="mobile-navbar">
            <div className="row">
                <div className="col-2">
                    <div to='/home' onClick={() => history.push("/home")}>
                        <IoHomeOutline className="mobile-navbar-icons" size="2em" color="#0275d8" />
                    </div>
                </div>
                <div className="col-2">
                    <div to='/home/families' onClick={() => history.push("/home/families")}>
                        <IoPeopleOutline className="mobile-navbar-icons" size="2em" color="#0275d8" />
                    </div>
                </div>
                <div className="col-2">
                    <div to='/home/chat' onClick={() => history.push("/home/chat")}>
                        <IoChatbubblesOutline className="mobile-navbar-icons" size="2em" color="#0275d8" />
                    </div>
                </div>
                <div className="col-2">
                    <div to='/home/voiceCall' onClick={() => history.push("/home/voiceCall")}>
                        <IoCallOutline className="mobile-navbar-icons" size="2em" color="#0275d8" />
                    </div>
                </div>
                <div className="col-2">
                    <div to='/home/events' onClick={() => history.push("/home/events")}>
                        <RiCalendarEventLine className="mobile-navbar-icons" size="2em" color="#0275d8" />
                    </div>
                </div>
                <div className="col-2">
                    <div to='/home/notifications' onClick={() => history.push("/home/notifications")}>
                        <IoNotificationsCircleOutline className="mobile-navbar-icons" size="2.2em" color="#0275d8" />
                    </div>
                </div>
            </div>
        </div>
    )
}
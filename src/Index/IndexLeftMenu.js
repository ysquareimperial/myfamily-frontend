import React from 'react'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { RiCalendarEventLine, RiNotification2Line } from 'react-icons/ri'
import { GiFamilyHouse } from 'react-icons/gi'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { ImTree } from 'react-icons/im'
import { IoWalkSharp, IoNotificationsCircleOutline, IoVideocamOutline, IoChatbubblesOutline, IoPersonCircleOutline, IoHomeOutline, IoCallOutline, IoPeopleOutline, IoTimerOutline } from "react-icons/io5"
import './IndexPage.css'
import './Mobile.css'
export default function IndexLeftMenu() {
    const location = useLocation()
    const history = useHistory()
    let date = new Date().getFullYear()
    return (
        <div className="col1 leftSidebar" style={{position:'fixed'}}>
            <div to='/home' onClick={() => history.push("/home")} className={`active1 ${location.pathname === "/home" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoHomeOutline size="1.3em" color="#0275d8" /> Home</h4>
            </div>
            <div to='/home/families' onClick={() => history.push("/home/families")} className={`active1 ${location.pathname === "/home/families"  && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoPeopleOutline size="1.3em" color="#0275d8" /> Families</h4>
            </div>
            <div to='/home/chat' onClick={() => history.push("/home/chat")} className={`active1 ${location.pathname === "/home/chat" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoChatbubblesOutline size="1.3em" color="#0275d8" /> Chat</h4>
            </div>  
            <div to='/home/voiceCall' onClick={() => history.push("/home/voiceCall")} className={`active1 ${location.pathname === "/home/voiceCall" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoCallOutline size="1.3em" color="#0275d8" /> Voice Call</h4>
            </div>
            <div to='/home/videoCall' onClick={() => history.push("/home/videoCall")} className={`active1 ${location.pathname === "/home/videoCall" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoVideocamOutline size="1.5em" color="#0275d8" /> Video Call</h4>
            </div>
            <div to='/home/visitation' onClick={() => history.push("/home/visitation")} className={`active1 ${location.pathname === "/home/visitation" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoWalkSharp size="1.5em" color="#0275d8" /> Visitations</h4>
            </div>
            <div to='/home/supportFamily' onClick={() => history.push("/home/supportFamily")} className={`active1 ${location.pathname === "/home/supportFamily" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <FaHandHoldingUsd size="1.3em" color="#0275d8" /> Support Family</h4>
            </div>
            <div to='/home/familyTree' onClick={() => history.push("/home/familyTree")} className={`active1 ${location.pathname === "/home/familyTree" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <ImTree size="1.3em" color="#0275d8" /> Family Tree</h4>
            </div>
            <div to='/home/events' onClick={() => history.push("/home/events")} className={`active1 ${location.pathname === "/home/events" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <RiCalendarEventLine size="1.3em" color="#0275d8" /> Events</h4>
            </div>
            <div to='/home/memories' onClick={() => history.push("/home/memories")} className={`active1 ${location.pathname === "/home/memories" && 'active_sidebar'}`}>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoTimerOutline size="1.3em" color="#0275d8" /> Memories</h4>
            </div>
            <hr style={{ width: 250 }} className="bg-primary"></hr>
            <p className="text-left" style={{ color: "grey", marginLeft:5 }}>myfamily <span>&copy;</span> {date}. <span style={{ cursor: 'pointer' }}>Privacy.</span> <span style={{ cursor: 'pointer' }}>Cookies</span></p>
        </div>
    )
}

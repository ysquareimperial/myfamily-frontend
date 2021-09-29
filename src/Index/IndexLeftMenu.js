import React from 'react'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { RiCalendarEventLine, RiNotification2Line } from 'react-icons/ri'
import { GiFamilyHouse } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import {ImTree} from 'react-icons/im'
import { IoWalkSharp, IoNotificationsCircleOutline, IoVideocamOutline, IoChatbubblesOutline, IoPersonCircleOutline, IoHomeOutline, IoCallOutline, IoPeopleOutline, IoTimerOutline } from "react-icons/io5"
import './IndexPage.css'
export default function IndexLeftMenu() {
    let date = new Date().getFullYear()
    return (
        <div className="col1" style={{position:"fixed", width:"100%", height:"100%"}}>
            <NavLink to='/home' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoHomeOutline size="1.3em" color="#0275d8" /> Home</h4>
            </NavLink>
            <NavLink to='/home/families' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoPeopleOutline size="1.3em" color="#0275d8" /> Families</h4>
            </NavLink>
            <NavLink to='/home/chat' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoChatbubblesOutline size="1.5em" color="#0275d8" /> Chat</h4>
            </NavLink>
            <NavLink to='/home/voiceCall' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoCallOutline size="1.5em" color="#0275d8" /> Voice Call</h4>
            </NavLink>
            <NavLink to='/home/videoCall' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoVideocamOutline size="1.5em" color="#0275d8" /> Video Call</h4>
            </NavLink>
            <NavLink to='/home/visitation' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoWalkSharp size="1.5em" color="#0275d8" /> Visitations</h4>
            </NavLink>
            <NavLink to='/home/supportFamily' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <FaHandHoldingUsd size="1.3em" color="#0275d8" /> Support Family</h4>
            </NavLink>
            <NavLink to='/home/familyTree' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <ImTree size="1.3em" color="#0275d8" /> Family Tree</h4>
            </NavLink>
            <NavLink to='/home/events' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <RiCalendarEventLine size="1.3em" color="#0275d8" /> Events</h4>
            </NavLink>
            <NavLink to='/home/memories' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoTimerOutline size="1.3em" color="#0275d8" /> Memories</h4>
            </NavLink>
            {/* <NavLink to='/notifications' activeClassName="active">
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoNotificationsCircleOutline size="1.5em" color="#0275d8" /> Notifications</h4>
            </NavLink> */}
            <hr style={{ backgroundColor: "" }} className="bg-primary"></hr>
            <p className="text-center" style={{ color: "grey" }}>myfamily <span>&copy;</span> {date}. <span style={{ cursor: 'pointer' }}>Privacy.</span> <span style={{ cursor: 'pointer' }}>Cookies</span></p>
        </div>
    )
}
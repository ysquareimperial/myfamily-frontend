import React from 'react'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { RiCalendarEventLine, RiNotification2Line } from 'react-icons/ri'
import { GiFamilyHouse } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {ImTree} from 'react-icons/im'
import { IoWalkSharp, IoNotificationsCircleOutline, IoVideocamOutline, IoChatbubblesOutline, IoPersonCircleOutline, IoHomeOutline, IoCallOutline, IoPeopleOutline, IoTimerOutline } from "react-icons/io5"
export default function IndexLeftMenu() {
    let date = new Date().getFullYear()
    return (
        <div className="col1" style={{position:"fixed", width:"100%", height:"100%"}}>
            <Link to='/home'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoHomeOutline size="1.3em" color="#0275d8" /> Home</h4>
            </Link>
            <Link to='/families'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoPeopleOutline size="1.3em" color="#0275d8" /> Families</h4>
            </Link>
            <Link to='/chat'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoChatbubblesOutline size="1.5em" color="#0275d8" /> Chat</h4>
            </Link>
            <Link to='/voiceCall'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoCallOutline size="1.5em" color="#0275d8" /> Voice Call</h4>
            </Link>
            <Link to='/videoCall'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoVideocamOutline size="1.5em" color="#0275d8" /> Video Call</h4>
            </Link>
            <Link to='/visitation'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoWalkSharp size="1.5em" color="#0275d8" /> Visitations</h4>
            </Link>
            <Link to='/supportFamily'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <FaHandHoldingUsd size="1.3em" color="#0275d8" /> Support Family</h4>
            </Link>
            <Link to='/familyTree'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <ImTree size="1.3em" color="#0275d8" /> Family Tree</h4>
            </Link>
            <Link to='/events'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <RiCalendarEventLine size="1.3em" color="#0275d8" /> Events</h4>
            </Link>
            <Link to='/memories'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoTimerOutline size="1.3em" color="#0275d8" /> Memories</h4>
            </Link>
            {/* <Link to='/notifications'>
                <h4 className="display-4 pl-4 pt-3" style={{ fontSize: 20, color: "#ffff" }}>
                    <IoNotificationsCircleOutline size="1.5em" color="#0275d8" /> Notifications</h4>
            </Link> */}
            <hr style={{ backgroundColor: "" }} className="bg-primary"></hr>
            <p className="text-center" style={{ color: "grey" }}>myfamily <span>&copy;</span> {date}. <span style={{ cursor: 'pointer' }}>Privacy.</span> <span style={{ cursor: 'pointer' }}>Cookies</span></p>
        </div>
    )
}
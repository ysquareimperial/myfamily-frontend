import React from 'react'
import { IoSettingsOutline, IoNotificationsCircleOutline, IoVideocamOutline, IoChatbubblesOutline, IoPersonCircleOutline, IoHomeOutline, IoCallOutline, IoPeopleOutline, IoTimerOutline } from "react-icons/io5"
import './Mobile.css'
export default function IndexRightMenu() {
    return (
        <>
            <div style={{ position: "fixed", marginLeft: "" }} className="text-center rightSidebar">
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
                    <h6 className="display-4" style={{ fontSize: 20 }}><IoPersonCircleOutline size="2em" color="#0275d8" />user's full name</h6>
                    <h6 className="display-4" style={{ fontSize: 20 }}><IoPersonCircleOutline size="2em" color="#0275d8" />user's full name</h6>
                    <h6 className="display-4" style={{ fontSize: 20 }}><IoPersonCircleOutline size="2em" color="#0275d8" />user's full name</h6>
                    <h6 className="display-4" style={{ fontSize: 20 }}><IoPersonCircleOutline size="2em" color="#0275d8" />user's full name</h6>
                    <h6 className="display-4" style={{ fontSize: 20 }}><IoPersonCircleOutline size="2em" color="#0275d8" />user's full name</h6>
                    <h6 className="display-4" style={{ fontSize: 20 }}><IoPersonCircleOutline size="2em" color="#0275d8" />user's full name</h6>
                </div>
            </div>
        </>
    )
}
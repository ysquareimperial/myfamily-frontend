import React from 'react'
import profileimg from '../Images/yasir.jpeg'
import './Notifications.css'
import { IoHeartOutline, IoPersonCircleOutline,IoHeartDislikeOutline, IoPeopleOutline,IoChatboxEllipsesOutline,IoShareSocialOutline } from 'react-icons/io5'
import {BsDownload} from 'react-icons/bs'
import {BsFilePost} from 'react-icons/bs'
import {MdPermContactCalendar} from 'react-icons/md'
export default function NotificationsComp() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-10">
                            <div>
                                <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Notifications</p>
                            </div>
                            <div className="row pt-2 notificationRow">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-1">
                                    <IoHeartOutline size="2em" color="#0275d8" />
                                </div>
                                <div className="col-md-7 text-white">
                                    <p>Yasir Ado Hassan likes your postYasir Ado Hassan likes your postYasir Ado Hassan likes your post</p>
                                </div>
                                <div className="col-md-3">
                                    <button style={{ borderRadius: 20, float: 'right' }} className="btn btn-outline-primary">Remove</button>
                                </div>
                            </div>
                            <div className="row pt-2 notificationRow">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-1">
                                    <IoPeopleOutline size="2em" color="#0275d8" />
                                </div>
                                <div className="col-md-7 text-white">
                                    <p>Yasir Ado Hassan added you to Yakasai's family</p>
                                </div>
                                <div className="col-md-3">
                                    <button style={{ borderRadius: 20, float: "right" }} className="btn btn-outline-primary">Remove</button>
                                </div>
                            </div>
                            <div className="row pt-2 notificationRow">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-1">
                                    <IoHeartDislikeOutline size="2em" color="#0275d8" />
                                </div>
                                <div className="col-md-7 text-white">
                                    <p>Yasir Ado Hassan dislikes your postYasir Ado Hassan likes your postYasir Ado Hassan likes your post</p>
                                </div>
                                <div className="col-md-3">
                                    <button style={{ borderRadius: 20, float: "right" }} className="btn btn-outline-primary">Remove</button>
                                </div>
                            </div>
                            <div className="row pt-2 notificationRow">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-1">
                                    <IoChatboxEllipsesOutline size="2em" color="#0275d8" />
                                </div>
                                <div className="col-md-7 text-white">
                                    <p>Yasir Ado Hassan commented on your post</p>
                                </div>
                                <div className="col-md-3">
                                    <button style={{ borderRadius: 20, float: "right" }} className="btn btn-outline-primary">Remove</button>
                                </div>
                            </div>
                            <div className="row pt-2 notificationRow">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-1">
                                    <IoShareSocialOutline size="2em" color="#0275d8" />
                                </div>
                                <div className="col-md-7 text-white">
                                    <p>Yasir Ado Hassan shared your post Your contact 'Yasir' is on myfamily</p>
                                </div>
                                <div className="col-md-3">
                                    <button style={{ borderRadius: 20, float: "right" }} className="btn btn-outline-primary">Remove</button>
                                </div>
                            </div>
                            <div className="row pt-2 notificationRow">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-1">
                                    <BsDownload size="1.7em" color="#0275d8"/>
                                </div>
                                <div className="col-md-7 text-white">
                                    <p>Yasir Ado Hassan downloaded your post Your contact 'Yasir' is on myfamily</p>
                                </div>
                                <div className="col-md-3">
                                    <button style={{ borderRadius: 20, float: "right" }} className="btn btn-outline-primary">Remove</button>
                                </div>
                            </div>
                            <div className="row pt-2 notificationRow">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-1">
                                    <BsFilePost size="2em" color="#0275d8" />
                                </div>
                                <div className="col-md-7 text-white">
                                    <p>Yasir Ado Hassan added a new post Your contact 'Yasir' is on myfamily</p>
                                </div>
                                <div className="col-md-3">
                                    <button style={{ borderRadius: 20, float: "right" }} className="btn btn-outline-primary">Remove</button>
                                </div>
                            </div>
                            <div className="row pt-2 notificationRow">
                                <div className="col-md-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-md-1">
                                    <MdPermContactCalendar size="2em" color="#0275d8" />
                                </div>
                                <div className="col-md-7 text-white">
                                    <p>Your contact 'Yasir' is on myfamilyYour contact 'Yasir' is on myfamily</p>
                                </div>
                                <div className="col-md-3">
                                    <button style={{ borderRadius: 20, float: "right" }} className="btn btn-outline-primary">Remove</button>
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
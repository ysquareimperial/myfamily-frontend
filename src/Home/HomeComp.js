import React, { useState } from 'react'
import { BsDownload } from "react-icons/bs";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { IoPersonCircleOutline, IoEllipsisVerticalOutline, IoHeartOutline, IoHeartDislikeOutline, IoChatboxEllipsesOutline, IoShareSocialOutline } from 'react-icons/io5'
import image from '../Images/yasir.jpeg'
import PostEngagements from './PostEngagements';
import './HomeComp.css'
import Post from './Post'
import '../Index/Mobile.css'
import MobileNavbar from '../MobileNavbar/MobileNavbar';
export default function HomeComp(props) {

    const {
        buttonLabel,
        className
    } = props;

    const [modal1, setModal1] = useState(false);
    const toggle1 = () => setModal1(!modal1);
    return (
        <div>
            <div>
                <Modal isOpen={modal1} toggle1={toggle1} className={className}>
                    {/* <ModalHeader toggle1={toggle1}>Missing Person Form</ModalHeader> */}
                    <ModalBody style={{ backgroundColor: "#04162C", borderColor: "#04162C" }}>
                        <div className="row">
                            <div className='col-6'>
                                <h5>Add a new post</h5>
                            </div>
                            <div className='col-6'>
                                <button className="btn btn-outline-primary mb-2" style={{ borderRadius: 20, float: "right", width: 100 }} onClick={toggle1}>Cancel</button>
                            </div>
                        </div>
                        <Post />
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="outline-primary" onClick={toggle1}>Submit</Button>{' '}
                        <Button color="outline-secondary" onClick={toggle1}>Cancel</Button>
                    </ModalFooter> */}
                </Modal>
            </div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            {/* <Post/> */}

                            <div className="">
                                <div className="row">
                                    <div className="col-6 ">
                                        <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }} className="homeText home-text">Home</p>
                                    </div>
                                    <div className="col-6 ">
                                        <button className=" add-a-post-button btn btn-outline-primary mb-2 mt-2 postButton" style={{ borderRadius: 20, float: "right", width: "" }} onClick={toggle1}>Add a Post</button>
                                    </div>
                                </div>
                            </div>
                            <div className="postContainer jumbotron p-2" style={{ backgroundColor: '#04162C' }}>
                                <div className="row postHeader">
                                    <div className="col-10 postLeftCol">
                                        <h6 className="hover mr-1 " style={{
                                            fontWeight: "bolder",
                                            display: "inline-block"
                                        }}>
                                            <IoPersonCircleOutline size="2em" color="#0275d8" />user's full name
                                        </h6>
                                    </div>
                                    <div className="col-2 postRightCol" style={{ float: 'right' }}>
                                        <IoEllipsisVerticalOutline size="1.5em" color="#0275d8" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-11">
                                        <p style={{ color: "white", overflow: "" }}>
                                            what user writes, appears here! what user writes, appears here.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <PostEngagements />
                                </div>
                            </div>
                            <div className="postContainer jumbotron p-2" style={{ backgroundColor: '#04162C' }}>
                                <div className="row postHeader">
                                    <div className="col-10 postLeftCol">
                                        <h6 className="hover mr-1 " style={{
                                            fontWeight: "bolder",
                                            display: "inline-block"
                                        }}>
                                            <IoPersonCircleOutline size="2em" color="#0275d8" />user's full name
                                        </h6>
                                        <h6 style={{ display: "inline", color: "grey" }}></h6>
                                        {/* <h6 style={{ display: "inline", color: "#0275d8" }}>(Yakasai's Family)</h6> */}
                                    </div>
                                    <div className="col-2 postRightCol" style={{ float: 'right' }}>
                                        <IoEllipsisVerticalOutline size="1.5em" color="#0275d8" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-11">
                                        <p style={{ color: "white", overflow: "" }}>
                                            what user writes, appears here.what user writes, appears here.
                                        </p>
                                    </div>
                                </div>
                                <img src={image} alt="post" style={{ height: 600 }} />
                                <div className="row">
                                    <PostEngagements />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-1"></div>
                    </div>

                </div>
            </div>
            <br></br>
            <MobileNavbar/>
        </div>
    )
}
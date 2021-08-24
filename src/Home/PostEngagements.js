import React, { useState } from 'react'
import profileimg from '../Images/yasir.jpeg'
import { BsDownload } from "react-icons/bs";
import './PostEngagements.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IoPersonCircleOutline, IoEllipsisVerticalOutline, IoHeartOutline, IoHeartDislikeOutline, IoChatboxEllipsesOutline, IoShareSocialOutline } from 'react-icons/io5'
export default function (props) {
    const {
        buttonLabel,
        className
    } = props;

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);


    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);
    const toggle3 = () => setModal3(!modal3);
    const toggle4 = () => setModal4(!modal4);
    const toggle5 = () => setModal5(!modal5);
    return (
        <>
            <div>
                <Modal isOpen={modal1} toggle1={toggle1} className={className} >
                    <ModalHeader toggle1={toggle1} style={{ backgroundColor: "#04162C" }}><IoHeartOutline color="#0275d8" size="1.5em" />Likes</ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
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
                    </ModalBody>

                </Modal>
            </div>
            <div>
                <Modal isOpen={modal2} toggle2={toggle2} className={className} >
                    <ModalHeader toggle2={toggle2} style={{ backgroundColor: "#04162C" }}>Dislikes</ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
                        Dislikes
                    </ModalBody>

                </Modal>
            </div>
            <div>
                <Modal isOpen={modal3} toggle3={toggle3} className={className} >
                    <ModalHeader toggle3={toggle3} style={{ backgroundColor: "#04162C" }}>Comments</ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
                        fghjkl;
                    </ModalBody>

                </Modal>
            </div>
            <div>
                <Modal isOpen={modal4} toggle4={toggle4} className={className} >
                    <ModalHeader toggle4={toggle4} style={{ backgroundColor: "#04162C" }}>Shares</ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
                        fghjkl;
                    </ModalBody>

                </Modal>
            </div>
            <div>
                <Modal isOpen={modal5} toggle5={toggle5} className={className} >
                    <ModalHeader toggle5={toggle5} style={{ backgroundColor: "#04162C" }}>Downloads</ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
                        fghjkl;
                    </ModalBody>

                </Modal>
            </div>
            <div className="col mt-2 text-white">
                <IoHeartOutline color="#0275d8" size="1.5em" /> <span className="postEngagements" onClick={toggle1}>51</span>
            </div>
            <div className="col mt-2 text-white">
                <IoHeartDislikeOutline color="#0275d8" size="1.5em" /> <span className="postEngagements" onClick={toggle2}>532</span>
            </div>
            <div className="col mt-2 text-white">
                <IoChatboxEllipsesOutline color="#0275d8" size="1.5em" /> <span className="postEngagements" onClick={toggle3}>51</span>
            </div>
            <div className="col mt-2 text-white">
                <IoShareSocialOutline color="#0275d8" size="1.5em" /> <span className="postEngagements" onClick={toggle4}>232</span>
            </div>
            <div className="col mt-2 text-white">
                <BsDownload color="#0275d8" size="1.5em" /> <span className="postEngagements" onClick={toggle5}>51</span>
            </div>
        </>
    )
}
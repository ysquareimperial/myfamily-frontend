import React, { useState } from 'react'
import profileimg from '../Images/yasir.jpeg'
import { BsDownload } from "react-icons/bs";
import './PostEngagements.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IoPersonCircleOutline, IoEllipsisVerticalOutline, IoHeartOutline, IoHeartDislikeOutline, IoChatboxEllipsesOutline, IoShareSocialOutline, IoHeart } from 'react-icons/io5'
export default function (props) {
    const {
        buttonLabel,
        className
    } = props;
    const [like, setlike] = useState({
        count: 2,
        action: false
    })
    const [comment, setcomment] = useState(3)
    const [share, setshare] = useState(1)
    const [download, setdownload] = useState(6)
    const [modal1, setModal1] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);


    const toggle1 = () => setModal1(!modal1);
    const toggle3 = () => setModal3(!modal3);
    const toggle4 = () => setModal4(!modal4);
    const toggle5 = () => setModal5(!modal5);
    const handleCommentChange = () => { setcomment(prev => prev + 1) }
    const handleLikeChange = () => { setlike(prev => ({ ...prev, count: prev.count + 1, action: true })) }
    const handleShareChange = () => { setshare(prev => prev + 1) }
    const handleDownloadChange = () => { setdownload(prev => prev + 1) }
    return (
        <>
            <div>
                <Modal isOpen={modal1} toggle1={toggle1}>
                    <ModalHeader toggle1={toggle1} style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
                        <div className="row ">
                            <dv className="col-md-6">
                                <IoHeartOutline color="#0275d8" size="1.5em" />Likes
                            </dv>
                            <dv className="col-md-6">
                                <button className="btn btn-outline-primary" onClick={toggle1} style={{ marginLeft: 200, borderRadius: 20 }}>Close</button>
                            </dv>
                        </div>
                    </ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
                        <div className="row pt-2 notificationRow">
                            <div className="col-md-1">
                                <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                            </div>
                            <div className="col-md-7 text-white mt-2 ml-1">
                                <p>Yasir Ado Hassan <span className="text-secondary"></span></p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
            <div>
                <Modal isOpen={modal3} toggle3={toggle3} className={className} >
                    <ModalHeader toggle3={toggle3} style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
                        <div className="row">
                            <dv className="col-md-6">
                                <IoChatboxEllipsesOutline color="#0275d8" size="1.5em" /> Comments
                            </dv>
                            <dv className="col-md-6">
                                <button className="btn btn-outline-primary" onClick={toggle3} style={{ marginLeft: 180, borderRadius: 20 }}>Close</button>
                            </dv>
                        </div>
                    </ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
                        <div className="row pt-2 notificationRow">
                            <div className="col-md-1">
                                <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                            </div>
                            <div className="col-md-7 text-white mt-2 ml-1">
                                <p>Yasir Ado Hassan <span className="text-secondary"></span></p>
                                <p>Comment: <span>Comment appears here</span></p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
            <div>
                <Modal isOpen={modal4} toggle4={toggle4} className={className} >
                    <ModalHeader toggle4={toggle4} style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
                        <div className="row">
                            <dv className="col-md-6">
                                <IoShareSocialOutline color="#0275d8" size="1.5em" /> Shares
                            </dv>
                            <dv className="col-md-6">
                                <button className="btn btn-outline-primary" onClick={toggle4} style={{ marginLeft: 180, borderRadius: 20 }}>Close</button>
                            </dv>
                        </div>
                    </ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
                        <input style={{
                            backgroundColor: "#04162C",
                            borderRadius: 19,
                            color: 'white',
                            width: "96%",
                            alignContent: "center",
                            borderColor: '#0b2e5c'
                        }} type="search" className="form-control" placeholder="Search a member" />
                        <div className="row pt-2 ">
                            <div className="col-md-1">
                                <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                            </div>
                            <div className="col-md-7 text-white mt-2 ml-1">
                                <p>Yasir Ado Hassan <span className="text-secondary"></span></p>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginLeft: 45 }}>Share</button>
                            </div>
                        </div>
                    </ModalBody>

                </Modal>
            </div>
            <div>
                <Modal isOpen={modal5} toggle5={toggle5} className={className} >
                    <ModalHeader toggle4={toggle4} style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
                        <div className="row">
                            <dv className="col-md-6">
                                <BsDownload color="#0275d8" size="1.5em" /> Downloads
                            </dv>
                            <dv className="col-md-6">
                                <button className="btn btn-outline-primary" onClick={toggle5} style={{ marginLeft: 180, borderRadius: 20 }}>Close</button>
                            </dv>
                        </div>
                    </ModalHeader>
                    <ModalBody style={{ backgroundColor: "#04162C" }}>
                        fghjkl;
                    </ModalBody>

                </Modal>
            </div>
            <div className="col mt-2 text-white text-center">
                {like.action ? <IoHeart color="#0275d8" size="1.5em" onClick={handleLikeChange} /> : <IoHeartOutline color="#0275d8" size="1.5em" onClick={handleLikeChange} />} <span className="postEngagements" onClick={toggle1} >{like.count}</span>

            </div>
            <div className="col mt-2 text-white text-center">
                <IoChatboxEllipsesOutline color="#0275d8" size="1.5em" onClick={handleCommentChange} /> <span className="postEngagements" onClick={toggle3}  >{comment}</span>
            </div>
            <div className="col mt-2 text-white text-center">
                <IoShareSocialOutline color="#0275d8" size="1.5em" onClick={handleShareChange} /> <span className="postEngagements" onClick={toggle4} >{share}</span>
            </div>
            <div className="col mt-2 text-white text-center">
                <BsDownload color="#0275d8" size="1.5em" onClick={handleDownloadChange} /> <span className="postEngagements" onClick={toggle5} >{download}</span>
            </div>
        </>
    )
}
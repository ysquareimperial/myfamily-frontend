import React, {useState} from 'react'
import MyModal from '../Chat/Modal';
import { IoPeopleOutline, IoVideocamOutline, IoCallOutline } from 'react-icons/io5'
import '../Index/Mobile.css'
import MobileNavbar from '../MobileNavbar/MobileNavbar';
export default function VideoCallComp() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div>
                                <p className="video-call-text"style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Video Call</p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="private-chat-card card" style={{ backgroundColor: "#04162C" }}>
                                <div className="card-header text-white text-center" style={{ fontWeight: 'bold' }}>
                                    Private Call
                                </div>
                                <div className="card-body text-center">
                                    <IoVideocamOutline size="5em" color="#0275d8" />
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }} onClick={toggle}>Choose a member</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="private-chat-card card" style={{ backgroundColor: "#04162C" }}>
                                <div className="card-header text-white text-center" style={{ fontWeight: 'bold' }}>
                                    Family Call
                                </div>
                                <div className="card-body text-center">
                                    <IoPeopleOutline size="5em" color="#0275d8" />
                                    <IoVideocamOutline size="5em" color="#0275d8" />
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }}>Call Family</button>
                                </div>
                            </div>
                        </div>
                        <MyModal contact="Video Call" type="Call" toggle={toggle} modal={modal}/>

                      
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <br></br>
            <MobileNavbar/>
        </div>
    )
}
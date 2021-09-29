import React, {useState} from 'react'
import { IoPeopleOutline } from 'react-icons/io5'
// import { useState } from 'react';
import profileimg from '../Images/yasir.jpeg'
import MyModal from './Modal';


export default function ChatComp() {
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
                                <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Chat</p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="card" style={{ backgroundColor: "#04162C" }}>
                                <div className="card-header text-white text-center" style={{ fontWeight: 'bold' }}>
                                    Private Chat
                                </div>
                                <div className="card-body text-center">
                                    <IoPeopleOutline size="5em" color="#0275d8" />
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }} onClick={toggle}
                                    >Choose a member</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card" style={{ backgroundColor: "#04162C" }}>
                                <div className="card-header text-white text-center" style={{ fontWeight: 'bold' }}>
                                    Family Chat
                                </div>
                                <div className="card-body text-center">
                                    <IoPeopleOutline size="5em" color="#0275d8" />
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }}
                                    >Chat Family</button>
                                </div>
                            </div>
                        </div>
                        <MyModal contact="Chat" type="Chat" toggle={toggle} modal={modal}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        ghjk
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
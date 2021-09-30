import React, {useState} from 'react'
import { IoPeopleOutline, IoCallOutline } from 'react-icons/io5'
import MyModal from '../Chat/Modal';
export default function VoiceCallComp() {
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
                                <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Voice Call</p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="card" style={{ backgroundColor: "#04162C" }}>
                                <div className="card-header text-white text-center" style={{ fontWeight: 'bold' }}>
                                    Private Call
                                </div>
                                <div className="card-body text-center">
                                    <IoCallOutline size="5em" color="#0275d8" />
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }} onClick={toggle}>Choose a member</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card" style={{ backgroundColor: "#04162C" }}>
                                <div className="card-header text-white text-center" style={{ fontWeight: 'bold' }}>
                                    Family Call
                                </div>
                                <div className="card-body text-center">
                                    <IoPeopleOutline size="5em" color="#0275d8" />
                                    <IoCallOutline size="4em" color="#0275d8" />

                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }}>Call Family</button>
                                </div>
                            </div>
                        </div>
                        <MyModal contact="Voice Call" type="Call" toggle={toggle} modal={modal}/>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}
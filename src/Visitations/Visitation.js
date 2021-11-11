import React, { useState } from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai"
import CustomInput2 from '../CustomFiles/CustomInput2';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import profile from '../Images/yasir.jpeg'
import '../Index/Mobile.css'
// import '../Index/IndexPage.css'
import MobileNavbar from '../MobileNavbar/MobileNavbar';
export default function Visitation() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [createVisit, setCreateVisit] = useState({
        fullName: '',
        time: '',
        venue: '',
        date: ''
    })
    const reset = () => {
        setCreateVisit({
            fullName: '',
            time: '',
            venue: '',
            date: ''
        }
        )
    }
    const handleCreateVisitChange = ({ target: { name, value } }) => {
        setCreateVisit(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        reset()
        let obj = {
            createVisit
        }
        console.log(obj)
        setModal(!Modal)
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className="text-white" style={{}}>
                <ModalBody style={{ backgroundColor: "#04162C" }}>
                    <p className="text-white" style={{ fontWeight: "bold", fontSize: 20 }}>Create a Visit</p>
                    <div className="row p-2">
                        <div className="col-md-12 form-group" >
                            <CustomInput2 className="form-control"
                                label="Family Member Name"
                                name="fullName"
                                type="text"
                                value={createVisit.fullName}
                                handleChange={handleCreateVisitChange}
                            />
                        </div>
                        <div className="col-md-12 form-group" >
                            <CustomInput2 className="form-control"
                                label="Time"
                                name="time"
                                type="time"
                                value={createVisit.time}
                                handleChange={handleCreateVisitChange}
                            />
                        </div>
                        <div className="col-md-12 form-group" >
                            <CustomInput2 className="form-control"
                                label="Date"
                                name="date"
                                type="date"
                                value={createVisit.date}
                                handleChange={handleCreateVisitChange}
                            />
                        </div>
                        <div className="col-md-12 form-group" >
                            <CustomInput2 className="form-control"
                                label="Venue"
                                name="venue"
                                type="text"
                                value={createVisit.venue}
                                handleChange={handleCreateVisitChange}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
                    <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle}>Cancel</Button>
                    <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={handleSubmit}>Create</Button>
                </ModalFooter>
            </Modal>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-7">
                                    <div>
                                        <p className="visitation-text"style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Visitations</p>
                                        <CustomInput className="notification-switch" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Enable Notifications" />
                                    </div>
                                </div>
                                <div className="col-5  pt-2">
                                    <button className="create-a-visit-button btn btn-outline-primary" style={{ borderRadius: 20, float: 'right' }} onClick={toggle}>Create a Visit</button>
                                </div>
                            </div>
                            <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10, paddingBottom: 10 }}>
                                <div className="row">
                                    <div className="col-md-11">
                                        <h5>Visit</h5>
                                        <p className='text-white' style={{ margin: 0, padding: 0 }}>Zaharadden</p>
                                        <p className="text-white" style={{ margin: 0, padding: 0 }}><GoLocation /> Minna Events Center, Nasarawa, Kano </p>
                                        <p className="text-white" style={{ margin: 0, padding: 0 }}><IoTimeOutline /> 4:00 PM</p>
                                        <p style={{ color: "white", margin: 0, padding: 0 }}><AiOutlineCalendar /> 12/12/2020</p>

                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-11">
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginRight: 5 }}>Edit</button>
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>Delete</button>
                                    </div>
                                    <div className="col-md-1"></div>
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
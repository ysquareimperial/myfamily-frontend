import React, { useState } from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai"
import profile from '../Images/yasir.jpeg'
import CustomInput2 from '../CustomFiles/CustomInput2';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';


export default function EventsComp() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [createEvent, setCreateEvent] = useState({
        eventName: '',
        eventTime: '',
        eventVenue: '',
        eventDate: ''
    })
    const reset = () => {
        setCreateEvent({
            eventName: '',
            eventTime: '',
            eventVenue: '',
            eventDate: ''
        }
        )
    }
    const handleCreateEventChange = ({ target: { name, value } }) => {
        setCreateEvent(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        reset()
        let obj = {
            createEvent
        }
        console.log(obj)
        setModal(!Modal)
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className="text-white" style={{}}>
                <ModalBody style={{ backgroundColor: "#04162C" }}>
                    <p className="text-white" style={{ fontWeight: "bold", fontSize: 20 }}>Create an Event</p>
                    <div className="row p-2">
                        <div className="col-md-12 form-group" >
                            <CustomInput2 className="form-control"
                                label="Event Name"
                                name="eventName"
                                type="text"
                                value={createEvent.eventName}
                                handleChange={handleCreateEventChange}
                            />
                        </div>
                        <div className="col-md-12 form-group" >
                            <CustomInput2 className="form-control"
                                label="Event Time"
                                name="eventTime"
                                type="time"
                                value={createEvent.eventTime}
                                handleChange={handleCreateEventChange}
                            />
                        </div>
                        <div className="col-md-12 form-group" >
                            <CustomInput2 className="form-control"
                                label="Event Date"
                                name="eventDate"
                                type="date"
                                value={createEvent.eventDate}
                                handleChange={handleCreateEventChange}
                            />
                        </div>
                        <div className="col-md-12 form-group" >
                            <CustomInput2 className="form-control"
                                label="Event Venue"
                                name="eventVenue"
                                type="text"
                                value={createEvent.eventVenue}
                                handleChange={handleCreateEventChange}
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
                        <div className="col-md-6">
                            <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Events</p>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: "right", marginTop: 5 }} onClick={toggle}>Create an Event</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on Notification for events" />

                            <div className="jumbotron" style={{ backgroundColor: '#04162C', paddingTop: 10, paddingBottom: 10 }}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src={profile} className="" alt="proifleimage" style={{ borderRadius: "" }} />
                                    </div>
                                    <div className="col-md-9">
                                        <h5>Naming Ceremony of Yasir</h5>
                                        <p style={{ color: "white", margin: 0, padding: 0 }}><GoLocation /> Minna Events Center, Nasarawa, Kano </p>
                                        <p style={{ color: "white", margin: 0, padding: 0 }}><IoTimeOutline /> 4:00 PM</p>
                                        <p style={{ color: "white", margin: 0, padding: 0 }}><AiOutlineCalendar /> 12/12/2020</p>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: "right", marginTop: 5 }}>View</button>
                                    </div>
                                </div>
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginTop: 10 }}>Generate & Share Card for the Event</button>
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, float: "right", marginTop: 10 }}>Delete</button>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="col-md-1"></div>
                </div>
            </div>

        </div>
    )
}


// name
// date
// time
// location
// privacy
// description
// image
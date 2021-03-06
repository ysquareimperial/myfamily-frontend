import React, { useState } from 'react'
import { useHistory } from 'react-router'
import profileimg from '../Images/yasir.jpeg'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import image2 from '../Images/image.PNG'
import CustomInput from '../CustomFiles/CustomInput';
import '../Index/Mobile.css'
import MobileNavbar from '../MobileNavbar/MobileNavbar';
export default function ViewFamily() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal2(!modal2);

    const history = useHistory();
    const [editFamily, setEditFamily] = useState({
        familyName: '',
        familyImage: '',
        familyAbout: ''
    })

    const reset = () => {
        setEditFamily({
            familyName: '',
            familyImage: '',
            familyAbout: ''
        }
        )
    }

    const handleEditFamilyChange = ({ target: { name, value } }) => {
        setEditFamily(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        reset()
        let obj = {
            editFamily
        }
        console.log(obj)
    }
    return (
        <div className="">
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody style={{ backgroundColor: "#04162C", color: 'white' }}>
                    <p className="text-white" style={{ fontWeight: "bold", fontSize: 20 }}>Edit Family</p>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <CustomInput
                                label="Family Name"
                                name="familyName"
                                type="text"
                                value={editFamily.familyName}
                                handleChange={handleEditFamilyChange}
                            />
                            <label>About Family</label>
                            <textarea
                                style={{
                                    backgroundColor: "#04162C",
                                    borderRadius: 19,
                                    color: 'white',
                                    width: "96%",
                                    alignContent: "center",
                                    borderColor: '#0b2e5c'
                                }}

                                name="familyAbout"
                                value={editFamily.familyAbout}
                                onChange={handleEditFamilyChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <CustomInput
                                label="Family Image"
                                name="familyImage"
                                type="file"
                                value={editFamily.familyImage}
                                handleChange={handleEditFamilyChange}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
                    <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle}>Cancel</Button>
                    <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle}>Save</Button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={modal2} toggle={toggle2}>
                <ModalBody style={{ backgroundColor: "#04162C", color: 'white' }}>
                    <p className="text-white" style={{ fontWeight: "bold", fontSize: 20 }}>Add a member</p>
                    <input style={{
                        backgroundColor: "#04162C",
                        borderRadius: 19,
                        color: 'white',
                        width: '100%',
                        alignContent: "center"
                    }} type="search" className="form-control" placeholder="Search a user by name or username..." />
                    <div className="row mt-2">
                        <div className="col-1">
                            <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                        </div>
                        <div className="col-7 text-white mt-2 ml-2">
                            <p>Yasir Ado Hassan <span className="text-secondary"></span></p>
                        </div>
                        <div className="col-2">
                            <button className="view-add-button btn btn-outline-primary" style={{ borderRadius: 20 }}>Add</button>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
                    <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle2}>Cancel</Button>
                    <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle2}>Save</Button>
                </ModalFooter>
            </Modal>

            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-7">
                                    <p className="family-name-text" style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Family Name</p>
                                </div>
                                <div className="col-5">
                                    <button className="edit-family-button btn btn-outline-primary" onClick={toggle} style={{ borderRadius: 20, float: "right", marginTop: 5 }}>Edit Family</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="" src={image2} alt="family image" style={{ borderColor: '#0275d8', borderRadius: 10, border: 1, borderStyle: 'solid' }} />
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col-6">
                                    <h4 className="members-text">Members</h4>
                                </div>
                                <div className="col-6">
                                    <button className="add-members-button btn btn-outline-primary" style={{ borderRadius: 20, float: 'right' }} onClick={toggle2}>Add members</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                                </div>
                                <div className="col-5 text-white mt-2 ml-2">
                                    <p>Yasir Ado Hassan <span className="text-secondary"></span></p>
                                </div>
                                <div className="col-2">
                                    <button className="remove-button btn btn-outline-primary mr-2" style={{ borderRadius: 20 }}>Remove</button>
                                </div>
                                <div className="col-2">
                                    <button className="view-fam-chat-button btn btn-outline-primary" style={{ borderRadius: 20, float: '' }}>Chat</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>

            <br></br>
            <MobileNavbar />
        </div>
    )
}
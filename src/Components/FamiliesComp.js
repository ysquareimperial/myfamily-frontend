import React, { useState } from 'react'
import CustomInput from '../CustomFiles/CustomInput';
import CustomTextField from '../CustomFiles/CustomTextField';
import CustomButton from '../CustomFiles/CustomButton'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import image from './yasir.jpeg'
export default function FamiliesComp(createFamily, handleCreateFamilyChange) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('0');
    const toggle2 = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <div className="row homeBorder">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Families</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-outline-primary" onClick={toggle} style={{ borderRadius: 20, float: "right", marginTop: 5 }}>Create a Family</button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalBody>
                            <p className="text-primary" style={{ fontWeight: "bold", fontSize: 20 }}>Create Family</p>
                            <div className="row p-2">
                                <div className="col-md-12 form-group" >
                                    <CustomInput className="form-control"
                                        label="Family Name"
                                        name="familyName"
                                        type="text"
                                        value={createFamily.familyName}
                                        handleChange={handleCreateFamilyChange}
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    <CustomInput
                                        label="Family Image"
                                        name="familyImage"
                                        type="file"
                                        value={createFamily.FamilyImage}
                                        handleChange={handleCreateFamilyChange}
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    <CustomTextField
                                        label="About Family"
                                        name="aboutFamily"
                                        type="text"
                                        value={createFamily.famlyAbout}
                                        handleChange={handleCreateFamilyChange}
                                    />
                                </div>
                                <div className="col-md-12 pt-2">
                                    <CustomButton
                                        className="btn btn-outline-primary"
                                        btnText="Add Family Members"
                                    />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button style={{ borderRadius: 20 }} color="outline-secondary" onClick={toggle}>Cancel</Button>
                            <Button style={{ borderRadius: 20 }} color="outline-success" onClick={toggle}>Create</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="card" style={{ backgroundColor: "#04162C" }}>
                            <div className="card-header text-white text-center" style={{ fontWeight: 'bold' }}>
                                Family Name will be here
                            </div>
                            <div className="card-body">
                                <img src={image} />
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card" style={{ backgroundColor: "#04162C" }}>
                            <div className="card-header text-white text-center" style={{ fontWeight: 'bold' }}>
                                Family Name will be here
                            </div>
                            <div className="card-body">
                                <img src={image} />
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

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
    )
}
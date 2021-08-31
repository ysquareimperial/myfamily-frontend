import React, { useState } from 'react'
import { useHistory } from 'react-router'
import CustomInput from '../CustomFiles/CustomInput';
import CustomTextField from '../CustomFiles/CustomTextField';
import CustomButton from '../CustomFiles/CustomButton'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import image from '../Images/yasir.jpeg'

export default function FamiliesComp() {
    const history = useHistory();
    const [createFamily, setCreateFamily] = useState({
        familyName: '',
        familyImage: '',
        familyAbout: ''
    })
    const reset = () => {
        setCreateFamily({
            familyName: '',
            familyImage: '',
            familyAbout: ''
        }
        )
    }
    const handleCreateFamilyChange = ({ target: { name, value } }) => {
        setCreateFamily(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        reset()
        let obj = {
            createFamily
        }
        console.log(obj)
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <div className="row homeBorder">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Families</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-outline-primary" onClick={toggle} style={{ borderRadius: 20, float: "right", marginTop: 5, width: 140 }}>Create a Family</button>
                    <Modal isOpen={modal} toggle={toggle} className="text-white" style={{}}>
                        <ModalBody style={{ backgroundColor: "#04162C" }}>
                            <p className="text-white" style={{ fontWeight: "bold", fontSize: 20 }}>Create Family</p>
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
                                        value={createFamily.familyImage}
                                        handleChange={handleCreateFamilyChange}
                                    />
                                </div>
                                <div className="col-md-12 form-group">
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
                                        value={createFamily.famlyAbout}
                                        onChange={handleCreateFamilyChange}
                                    />
                                </div>
                                <div className="col-md-12 pt-2">
                                    {/* <CustomButton
                                        className="btn btn-outline-primary"
                                        btnText="Add Family Members"
                                    /> */}
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
                            <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle}>Cancel</Button>
                            <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle}>Create</Button>
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
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20, width: 200 }} onClick={() => history.push('viewFamily')}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}
import React, { useState } from 'react'
import { AiTwotoneMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaBirthdayCake } from "react-icons/fa";
import { IoPeopleOutline } from 'react-icons/io5'
import { BsDownload } from "react-icons/bs";
import profileimg from '../Images/yasir.jpeg'
import CustomInput from '../CustomFiles/CustomInput';
import CustomTextField from '../CustomFiles/CustomTextField';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Media from './MediaTab';
import ProfileTab from './ProfileTab';
export default function Profile(profile, handleProfileChange) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('0');
    const toggle2 = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-8">
                                    <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Profile</p>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-outline-primary" onClick={toggle} style={{ borderRadius: 20, float: "right", marginTop: 5 }}>Edit Profile</button>
                                </div>
                            </div>
                            <div className="jumbotron p-2" style={{ backgroundColor: '#04162C' }}>
                                <div className="card  bg-dark" style={{ width: "" }}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={profileimg} className="card-img-top mx-auto d-block p-2" alt="proifleimage" style={{ borderRadius: 500, width: 150, height: 150 }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body text-right">
                                                <h5 className="card-title" style={{ lineHeight: 0.3, color: "white" }} >Yasir Ado Hassan</h5>
                                                <p className="card-text" style={{ color: "white" }}>@ysquareimperial</p>
                                                <p className="card-text" style={{ lineHeight: 0.3, color: "white" }}>About the user</p>
                                                <p className="card-text" style={{ lineHeight: 0.3, color: "white" }}>About the user</p>
                                                <p className="card-text" style={{ lineHeight: 0.3, color: "white" }}>About the user</p>
                                                <p className="card-text" style={{ lineHeight: 0.3, color: "white" }}>About the user</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="text-white" style={{ lineHeight: 0.5 }}><AiTwotoneMail size="1.5em" color="#ffff" />  Email Address</p>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-white" style={{ lineHeight: 0.5, textAlign: "right" }}>ysquare.theimperial@gmail.com</p>
                                            </div>
                                        </div><hr className="bg-primary mt-0  pt-0"></hr>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="text-white" style={{ lineHeight: 0.5 }}><AiOutlinePhone size="1.5em" color="#ffff" /> Mobile Number</p>
                                            </div>
                                            <div class="col-md-7">
                                                <p className="text-white" style={{ lineHeight: 0.5, textAlign: "right" }}>098765434567</p>
                                            </div>
                                        </div><hr className="bg-primary mt-0  pt-0"></hr>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="text-white" style={{ lineHeight: 0.5 }}><GoLocation size="1.5em" color="#ffff" /> Location</p>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-white" style={{ lineHeight: 0.5, textAlign: "right" }}>Kano, Kano Nigeria</p>
                                            </div>
                                        </div><hr className="bg-primary mt-0  pt-0"></hr>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="text-white" style={{ lineHeight: 0.5 }}><FaBirthdayCake size="1.5em" color="#ffff" /> Birthday</p>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-white" style={{ lineHeight: 0.5, textAlign: "right" }}>0 Jan 2020</p>
                                            </div>
                                        </div><hr className="bg-primary mt-0  pt-0"></hr>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="text-white" style={{ lineHeight: 0.5 }}><IoPeopleOutline size="1.5em" color="#ffff" /> Family</p>
                                            </div>
                                            <div className="col-md-7">
                                                <p className="text-white" style={{ lineHeight: 0.5, textAlign: "right" }}>Yakasai's Family</p>
                                            </div>
                                        </div><hr className="bg-primary mt-0  pt-0"></hr>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <ProfileTab />
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody>
                    <p className="text-primary" style={{ fontWeight: "bold", fontSize: 20 }}>Edit Profile</p>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <CustomInput
                                label="Profile Image"
                                name="profileImage"
                                type="file"
                                value={profile.profileImage}
                                handleChange={handleProfileChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <CustomTextField
                                label="About"
                                name="about"
                                type="text"
                                value={profile.about}
                                handleChange={handleProfileChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group" >
                            <CustomInput className="form-control"
                                label="First Name"
                                name="firstName"
                                type="text"
                                value={profile.firstName}
                                handleChange={handleProfileChange}
                            />
                        </div>
                        <div className="col-md-6 form-group" >
                            <CustomInput className="form-control"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                value={profile.lastName}
                                handleChange={handleProfileChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group" >
                            <CustomInput className="form-control"
                                label="User Name"
                                name="userName"
                                type="text"
                                value={profile.userName}
                                handleChange={handleProfileChange}
                            />
                        </div>
                        <div className="col-md-6 form-group" >
                            <CustomInput className="form-control"
                                label="Email"
                                name="email"
                                type="email"
                                value={profile.email}
                                handleChange={handleProfileChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group" >
                            <CustomInput className="form-control"
                                label="Mobile Number"
                                name="phone"
                                type="tel"
                                value={profile.phone}
                                handleChange={handleProfileChange}
                            />
                        </div>
                        <div className="col-md-6 form-group" >
                            <CustomInput className="form-control"
                                label="Location"
                                name="location"
                                type="text"
                                value={profile.location}
                                handleChange={handleProfileChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group" >
                            <CustomInput className="form-control"
                                label="Date Of Birth"
                                name="dateOfBirth"
                                type="date"
                                value={profile.dateOfBirth}
                                handleChange={handleProfileChange}
                            />
                        </div>
                        <div className="col-md-6 form-group" >
                            <CustomInput className="form-control"
                                label="Family Name"
                                name="familyName"
                                type="text"
                                value={profile.familyName}
                                handleChange={handleProfileChange}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ borderRadius: 20 }} color="outline-secondary" onClick={toggle}>Cancel</Button>
                    <Button style={{ borderRadius: 20 }} color="outline-success" onClick={toggle}>Save</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}
import React from 'react'
import MobileNavbar from '../MobileNavbar/MobileNavbar'
import { useHistory } from 'react-router'
import CustomInput from '../CustomFiles/CustomInput';
import CustomTextField from '../CustomFiles/CustomTextField';
import CustomButton from '../CustomFiles/CustomButton'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import image from '../Images/yasir.jpeg'
import '../Index/Mobile.css'
import '../Index/Mobile.css'
export default function FamilyTreeComp() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="memories-text">
                                <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Family Tree</p>
                               <p className="text-white">The Family Tree will be generated here</p>
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
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignIn from './SignIn'
import CustomButton from '../CustomFiles/CustomButton'
import SignUpRep from './SignUpRep'
import './Glow.css'
export default function SignInRep() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [signIn, setSignIn] = useState({
        userName: '',
        password: ''
    })
    const reset = () => {
        setSignIn({
            userName: '',
            password: ''
        }
        )
    }
    const handleSignInChange = ({ target: { name, value } }) => {
        setSignIn(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        reset()
        let obj = {
            signIn
        }
        console.log(obj)
    }


    return (
        <div>
            <h1 style={{ color: "#ffffff", fontWeight: "bolder", fontSize: 75 }} className="text-center">myfamily</h1>
            <hr className="bg-primary"></hr>
            <div className="row">

                <div className="col-md-2"></div>
                <div className="jumbotron col-md-8 pt-2" style={{ textAlign: 'center', backgroundColor:"#04162C" }}>
                    <div>
                        <SignIn signIn={signIn} handleSignInChange={handleSignInChange} />
                        <CustomButton
                            className="btn btn-outline-primary mt-4 col-md-12"
                            btnText="Sign In"
                            handleSubmit={handleSubmit}
                        />
                    </div>
                    <p className="text-primary" style={{ cursor: "pointer" }}>Forgotten password?</p>
                    <hr></hr>
                    <p style={{ fontSize: 12, color:'white' }}>If you dont have an account, click the button below.</p>
                    <button style={{ borderRadius: 20 }} className="btn btn-outline-success col-md-12" onClick={toggle}>Sign Up</button>
                </div>
                <div className="col-md-2"></div>
            </div>
            {/* <div className="glow">
                <span className="text-white lead text-center minor" style={{ fontSize: 24 }}>myfamily platform helps you get connected to all your family members and friends around the globe</span>
            </div> */}
            <Modal isOpen={modal} toggle={toggle} size="lg" >
                <ModalBody style={{ backgroundColor: "#04162C", borderColor: "#04162C", color:'white' }}>
                    <p className="text-primary text-center" style={{ fontWeight: "bold", fontSize: 20 }}>Sign Up and Get Connected to your Family</p>
                    <SignUpRep />
                </ModalBody>
            </Modal>
        </div>

    )
}
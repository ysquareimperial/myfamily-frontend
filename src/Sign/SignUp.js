import React from 'react'
import CustomInput from '../CustomFiles/CustomInput'
export default function SignUp({ signUp, handleSignUpChange }) { 
    return (
            <>
            <div className="row">
                <div className="col-6 p-3">
                    <div className="form-group">
                        <CustomInput className="form-control"
                            name="firstName"
                            type="text"
                            label="First Name"
                            value={signUp.firstName}
                            handleChange={handleSignUpChange}
                        />
                    </div>
                </div>
                <div className="col-6 p-3">
                    <div className="form-group">
                        <CustomInput className="form-control"
                            name="lastName"
                            type="text"
                            label="Last Name"
                            value={signUp.lastName}
                            handleChange={handleSignUpChange}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6 p-3">
                    <div className="form-group">
                        <CustomInput className="form-control"
                            name="email"
                            type="email"
                            label="Email"
                            value={signUp.email}
                            handleChange={handleSignUpChange}
                        />
                    </div>
                </div>
                <div className="col-6 p-3">
                    <div className="form-group">
                        <CustomInput className="form-control"
                            name="phone"
                            type="tel"
                            label="Mobile Number"
                            value={signUp.phone}
                            handleChange={handleSignUpChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 p-3">
                    <div className="form-group">
                        <CustomInput className="form-control"
                            label="Date Of Birth"
                            name="dateOfBirth"
                            type="date"
                            value={signUp.dateOfBirth}
                            handleChange={handleSignUpChange}
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group p-3">
                        <CustomInput className="form-control"
                            label="Password"
                            name="password"
                            type="password"
                            value={signUp.password}
                            handleChange={handleSignUpChange}
                        />
                    </div>
                </div>
            </div>
            <p className="lead text-secondary text-center" style={{ lineHeight: 1, fontSize: 15 }}>
                By clicking Sign Up, you consent to our <b className="text-primary" style={{ cursor: "pointer" }}>Terms</b>. Figure out how we gather,
                use and offer your information in our <b className="text-primary" style={{ cursor: "pointer" }}>Data Policy</b>. Our data policy also tells
                you how we use cookies and related technologies in our <b className="text-primary" style={{ cursor: "pointer" }}>Cookies Policy</b>.
                You may get SMS Notifications from us and can quit any time.
            </p>
    </>
    )
}
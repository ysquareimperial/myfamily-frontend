// import { Button } from 'bootstrap'
import React from 'react'
// import CustomButton from '../CustomFiles/CustomButton'
import CustomInput from '../CustomFiles/CustomInput'
import { IoEyeOutline } from "react-icons/io5";
export default function SignIn({ signIn, handleSignInChange, handleSubmit }) {
    
    function validation(){
        
    }
    return (
        <div>
            <p id="display"></p>
            <CustomInput
                name="userName"
                type="text"
                placeholder="Email/User Name/Mobile Number"
                value={signIn.userName}
                handleChange={handleSignInChange}

            />
            <CustomInput
                name="password"
                type="password"
                placeholder="Password"
                value={signIn.password}
                handleChange={handleSignInChange}
            />
            {/* <span><IoEyeOutline /></span> */}
        </div>

    )
}
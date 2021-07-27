import React, { useState } from 'react'
import SignUp from './SignUp'
import CustomButton from '../CustomFiles/CustomButton'
export default function SignUpRep() {
    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        password: ''
    })

    const reset = () => {
        setSignUp({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            password: ''
        })
    }

    const handleSignUpChange = ({ target: { name, value } }) => {
        setSignUp(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        reset()
        let obj = {
            signUp
        }
        console.log(obj)
    }

    return (
        <div>
            <SignUp signUp={signUp} handleSignUpChange={handleSignUpChange} />
            <CustomButton
                className="btn btn-outline-success mt-4 col-md-12"
                btnText="Sign Up"
                handleSubmit={handleSubmit}
            />
        </div>
    )
}
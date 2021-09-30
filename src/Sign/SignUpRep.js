import React, { useState, useContext } from 'react'
import SignUp from './SignUp'
import CustomButton from '../CustomFiles/CustomButton'
import { useHistory } from 'react-router'
import { _postApi } from '../redux/actions/api'
import { api_url } from '../redux/actions'


export default function SignUpRep() {
    const history = useHistory();
    // const query = useQuery()
    // const next = query.get("next")
    // const [setName] = useContext(UserContext);
    // const [loadSpinner, setLoadSpinner] = useState(false);



    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        password: '',
        query_type: 'insert'
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

    const handle = () => {

        reset()
        let obj = {
            signUp
        }
        console.log(obj)
    }

    const handleSubmit = () => {
        signUp.query_type = 'insert'
        _postApi(`${api_url}/users`,
        signUp,
        (data) => {
            if (data.success) {
                alert("Successully Submited")
                handle()
                history.push("/home")
            }
        }
        )
    }

    return (
        <div>
            <SignUp signUp={signUp} handleSignUpChange={handleSignUpChange} />
            <CustomButton
                className="btn btn-outline-primary mt-4 col-md-12"
                btnText="Sign Up"
                handleSubmit={handleSubmit}
            />
        </div>
    )
}
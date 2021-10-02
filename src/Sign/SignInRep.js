import React, { useState, useContext } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import SignIn from "./SignIn";
import CustomButton from "../CustomFiles/CustomButton";
import SignUpRep from "./SignUpRep";
import "./Glow.css";
import { useToasts } from "react-toast-notifications";
import { api_url } from "../redux/actions";
import { _postApi } from "../redux/actions/api";
import { _customNotify, _warningNotify } from "../Notifications/Helpers";

export default function SignInRep() {
  const [modal, setModal] = useState(false);

  const history = useHistory();
  const [results, setResults] = useState([]);
  const toggle = () => setModal(!modal);
  const [loadSpinner, setLoadSpinner] = useState(false);
  const { addToast } = useToasts();

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
    query_type: "login",
  });
  const reset = () => {
    setSignIn({
      email: "",
      password: "",
    });
  };
  const handleSignInChange = ({ target: { name, value } }) => {
    setSignIn((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    reset();
    let obj = {
      signIn,
    };
    console.log(obj);
  };

  const handleApi = () => {
    const { email, password } = signIn;
    if (email === "" || password === "") {
      _customNotify("Please complete the form", {
        appearance: "warning",
        autoDismiss: true,
      });
    } else {
      setLoadSpinner(true);
      _postApi(
        `${api_url}/postLogin`,
        signIn,
        (data) => {
          if (data.success) {
            _customNotify("Successfull Submited");
            window.location ="/home";
          } else {
            _customNotify(data.msg);
          }
        },
        (err) => {
          console.log(err);
          _warningNotify("BAD REQUEST PLEASE TRY AGAIN LETER");
        }
      );
    }
  };

  return (
    <div>
      <h1
        style={{ color: "#ffffff", fontWeight: "bolder", fontSize: 75 }}
        className="text-center"
      >
        myfamily
      </h1>
      <hr className="bg-primary"></hr>
      <div className="row">
        <div className="col-md-2"></div>
        <div
          className="jumbotron col-md-8 pt-2"
          style={{ textAlign: "center", backgroundColor: "#04162C" }}
        >
          <div>
            <SignIn signIn={signIn} handleSignInChange={handleSignInChange} />
            <CustomButton
              className="btn btn-outline-primary mt-4 col-md-12"
              btnText="Sign In"
              //   disabled={loadSpinner}
              handleSubmit={handleApi}
            />
            {/* <Spinner
              color="primary"
              className={
                loadSpinner ? "spinner-border spinner-border-sm" : null
              }
              role="status"
              aria-hidden="true"
            /> */}
            {/* <span
              
              
            ></span> */}
          </div>
          <p className="text-primary" style={{ cursor: "pointer" }}>
            Forgotten password?
          </p>
          <hr></hr>
          <p style={{ fontSize: 12, color: "white" }}>
            If you dont have an account, click the button below.
          </p>
          <button
            style={{ borderRadius: 20 }}
            className="btn btn-outline-success col-md-12"
            onClick={toggle}
          >
            Sign Up
          </button>
        </div>
        <div className="col-md-2"></div>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalBody
          style={{
            backgroundColor: "#04162C",
            borderColor: "#04162C",
            color: "white",
          }}
        >
          <p
            className="text-primary text-center"
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            Sign Up and Get Connected to your Family
          </p>
          <SignUpRep />
        </ModalBody>
      </Modal>
    </div>
  );
}

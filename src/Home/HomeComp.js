import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import {
  IoPersonCircleOutline,
  IoEllipsisVerticalOutline,
  IoHeartOutline,
  IoHeartDislikeOutline,
  IoChatboxEllipsesOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import image from "../Images/yasir.jpeg";
import PostEngagements from "./PostEngagements";
import "./HomeComp.css";
import Post from "./Post";
import "./MobileHome.css";
import { _fetchApi } from "../redux/actions/api";
import { api_url } from "../redux/actions";
import { _customNotify } from "../Notifications/Helpers";
import PostComp from "./PostComp";
import PostContainer from "./PostContainer";
export default function HomeComp(props) {
  const { buttonLabel, className } = props;
  const [results, setResults] = useState([]);
  //   const [data] = useState([]);
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const getPost = () => {
    _fetchApi(`${api_url}/getPosting`, (data) => {
      if (data.results) {
        setResults(data.results);
        _customNotify("Fetch Successfull");
      }
    });
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <div>
        <Modal isOpen={modal1} toggle1={toggle1} className={className}>
          {/* <ModalHeader toggle1={toggle1}>Missing Person Form</ModalHeader> */}
          <ModalBody
            style={{ backgroundColor: "#04162C", borderColor: "#04162C" }}
          >
            <div className="row">
              <div className="col-md-6">
                <h5>Add a new post</h5>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-outline-primary mb-2"
                  style={{ borderRadius: 20, float: "right", width: 100 }}
                  onClick={toggle1}
                >
                  Cancel
                </button>
              </div>
            </div>
            <Post toggle1={toggle1} />
          </ModalBody>
        </Modal>
      </div>
      <div className="row">
        <div className="col-md-12 homeBorder">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              {/* <Post/> */}

              <div className="">
                <div className="row">
                  <div className="col-md-6">
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 30,
                        color: "#ffffff",
                      }}
                      className="homeText"
                    >
                      Home
                    </p>
                  </div>
                  <div className="col-md-6">
                    <button
                      className="btn btn-outline-primary mb-2 mt-2 postButton"
                      style={{ borderRadius: 20, float: "right", width: "" }}
                      onClick={toggle1}
                    >
                      Add a Post
                    </button>
                  </div>
                </div>
              </div>
                <PostContainer results={results}/>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

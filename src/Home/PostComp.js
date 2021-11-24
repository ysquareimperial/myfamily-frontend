import React from "react";
import {
  IoEllipsisVerticalOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import PostEngagements from "./PostEngagements";
import moment from 'moment';


function PostComp({ item,date }) {
  return (
    <div>
      <div className="jumbotron p-2" style={{ backgroundColor: "#04162C" }}>
        <div className="row">
          <div className="col-md-11">
            <h6
              className="hover mr-1 "
              style={{
                fontWeight: "bolder",
                display: "inline-block",
              }}
            >
              <IoPersonCircleOutline size="2em" color="#0275d8" />
              user's full name
            </h6>
            <h6 style={{ display: "inline", color: "#0275d8" }}>
              (Yakasai's Family)
            </h6>
            <h6 style={{ display: "inline", color: "#0275d8", marginLeft: "1%" }}>
             {mockComponent().format("YYYY-MM-DD hh:mm"),date}
            </h6>
          </div>
          <div className="col-md-1" style={{ float: "right" }}>
            <IoEllipsisVerticalOutline size="1.5em" color="#0275d8" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-11">
            <p style={{ color: "white", overflow: "" }}>{item}</p>
          </div>
        </div>
        <div className="row">
          <PostEngagements />
        </div>
      </div>
    </div>
  );
}

export default PostComp;

import React, { useState } from "react";
import { IoPeopleOutline, IoImageOutline, IoImage } from "react-icons/io5";
import { GoFile } from "react-icons/go";
import { MdAttachFile, MdAudiotrack } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import CustomTextField from "../CustomFiles/CustomTextField";
import { _postApi } from "../redux/actions/api";
import { api_url } from "../redux/actions";
import { _customNotify, _warningNotify } from "../Notifications/Helpers";
import { useHistory } from "react-router";
export default function Post({ toggle1 }) {
  const [form, setForm] = useState({
    text: "",
    query_type: "insert",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const history = useHistory();
  const handleSubmit = () => {
    _postApi(
      `${api_url}/posting`,
      form,
      (data) => {
        if (data.success) {
          toggle1();
        }
      },
      (err) => {
        console.log(err);
        _warningNotify("BAD REQUEST PLEASE TRY AGAIN LETER");
      }
    );
  };
  return (
    <div style={{ borderRadius: 10 }}>
      <div className="row">
        <div className="col-md-12 homeBorder">
          <div className="input-group mb-3 pt-2">
            <textarea
              name="text"
              value={form.text}
              onChange={handleChange}
              placeholder="Share something with your family members..."
              style={{
                width: 550,
                height: 100,
                outline: "none",
                borderRadius: 20,
                padding: 5,
                backgroundColor: "#04162C",
                color: "white",
                borderColor: "white",
                padding: 10,
              }}
            />
          </div>
          <div className="row text-white pb-2">
            <div className="col-md-1" style={{ cursor: "pointer" }}>
              <GoFile size="1.5em" color="#0275d8" />
            </div>
            <div className="col-md-1" style={{ cursor: "pointer" }}>
              <MdAudiotrack size="1.7em" color="#0275d8" />
            </div>
            <div className="col-md-1" style={{ cursor: "pointer" }}>
              <IoImage size="1.5em" color="#0275d8" />
            </div>
            <div className="col-md-1" style={{ cursor: "pointer" }}>
              <RiVideoLine size="1.7em" color="#0275d8" />
            </div>
            <div className="col-md-8" style={{ cursor: "pointer" }}>
              <button
                className="btn btn-outline-primary mb-2"
                style={{ borderRadius: 20, float: "right", width: 100 }}
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

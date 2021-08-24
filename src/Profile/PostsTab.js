import React from 'react'
import { IoPersonCircleOutline, IoEllipsisVerticalOutline, IoHeartOutline, IoHeartDislikeOutline, IoChatboxEllipsesOutline, IoShareSocialOutline } from 'react-icons/io5'
import { BsDownload } from "react-icons/bs";
export default function PostsTab() {
    return (
        <div>
            <div className="row pt-3">
                <div className="col-md-12">
                    {/* <div className="jumbotron p-2" style={{ backgroundColor: '#04162C' }}> */}
                        {/* <div className="row">
                            <div className="col-md-10">
                                <h6 className="hover mr-1 " style={{
                                    fontWeight: "bolder",
                                    display: "inline-block"
                                }}>
                                    <IoPersonCircleOutline size="2em" color="#0275d8" />Ado Yasir Hassan
                                </h6>
                                <h6 style={{ display: "inline", color: "grey" }}>@ysquareimperial, </h6>
                                <h6 style={{ display: "inline", color: "#0275d8" }}>(Yakasai's Family)</h6>
                            </div>
                            <div className="col-md-2" style={{}}>
                                <IoEllipsisVerticalOutline size="1.5em" color="#0275d8" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-11">
                                <p style={{ color: "white", overflow: "" }}>
                                    what ever a user write, appears here.what ever a user write, appears here.
                                </p>
                            </div>
                        </div> */}
                        {/* <img src={image} alt="post" style={{ height: 600 }} /> */}
                        {/* <div className="row">
                            <div className="col mt-2 text-white">
                                <IoHeartOutline color="#0275d8" size="1.5em" /> 51
                            </div>
                            <div className="col mt-2 text-white">
                                <IoHeartDislikeOutline color="#0275d8" size="1.5em" /> 31
                            </div>
                            <div className="col mt-2 text-white">
                                <IoChatboxEllipsesOutline color="#0275d8" size="1.5em" /> 10
                            </div>
                            <div className="col mt-2 text-white">
                                <IoShareSocialOutline color="#0275d8" size="1.5em" /> 75
                            </div>
                            <div className="col mt-2 text-white">
                                <BsDownload color="#0275d8" size="1.5em" />
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
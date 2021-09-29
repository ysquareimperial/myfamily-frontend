import React from 'react'
import { IoPeopleOutline } from 'react-icons/io5'
import { AiOutlineSend } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import profileimg from '../Images/yasir.jpeg'

export default function ChatMember() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row mb-1" style={{ backgroundColor: "#04162C", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <div className="col-md-1">
                            <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginLeft: 0, marginTop: 10 }}>Back</button>
                        </div>
                        <div className="col-md-1">
                            <img src={profileimg} style={{ borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5, marginBottom: 5 }} />
                        </div>
                        <div className="col-md-10" style={{ marginTop: 15 }}>
                            <h5 className="" style={{ display: 'inline-block', marginLeft: 10 }}>full name</h5>
                            <p style={{ display: 'inline', color: 'grey' }}> @username</p>
                        </div>
                    </div>
                    hjhjhjhsd
                    <div className="row" style={{ backgroundColor: "#04162C", borderTopLeftRadius: 10, borderBottomTopRadius: 10 }}>
                        <div className="col-md-1">
                            <IoMdAdd color='#0275d8' size='2em' style={{cursor:'pointer', borderRadius: 20, marginTop: 15, marginLeft:40 }}/>
                        </div>
                        <div className="col-md-9">
                            <textarea className="form-control mt-1 mb-1" rows="2" style={{ backgroundColor: '#04162C', color: 'white', borderRadius: 15, marginLeft: 20 }}></textarea>
                        </div>
                        <div className="col-md-2">
                            <AiOutlineSend color='#0275d8' size='2em' style={{cursor:'pointer', borderRadius: 20, marginTop: 15 }} />
                            {/* <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginTop: 15 }}>Send</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
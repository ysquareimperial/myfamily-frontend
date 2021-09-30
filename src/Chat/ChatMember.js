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

                    <div className="row">
                        <div className="col-md-2 "></div>
                        <div className="col-md-4 bg-secondary mr-1" >
                            <p style={{ float: 'left', marginLeft: 10, backgroundColor: '#0275d8', color: 'white' }}>cfdfkjdjfdjf</p>
                        </div>
                        <div className="col-md-4 bg-secondary">
                            <p style={{ float: 'right', backgroundColor: '#0275d8', color: 'white' }}>cfdfkjdjfdjf</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>

                    <div className="row" style={{ backgroundColor: "#04162C", borderTopLeftRadius: 10, borderBottomTopRadius: 10 }}>
                        <div className="col-md-1">
                            <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginTop: 15, marginLeft:15 }}>Add</button>
                            {/* <IoMdAdd color='#0275d8' size='2em' style={{ cursor: 'pointer', borderRadius: 20, marginTop: 15, marginLeft: 40 }} /> */}
                        </div>
                        <div className="col-md-9">
                            <textarea className="form-control mt-1 mb-1" rows="2" style={{ backgroundColor: '#04162C', color: 'white', borderRadius: 15, marginLeft: 20 }}></textarea>
                        </div>
                        <div className="col-md-2">
                            {/* <AiOutlineSend color='#0275d8' size='2em' style={{ cursor: 'pointer', borderRadius: 20, marginTop: 15 }} /> */}
                            <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginTop: 15 }}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
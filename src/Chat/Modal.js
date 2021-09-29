import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import profileimg from '../Images/yasir.jpeg'

export default function MyModal({toggle, modal, type, contact}) {
    // const [modal, setModal] = useState(false);
    // const toggle = () => setModal(!modal);

    return (
        <Modal isOpen={modal} toggle={toggle}>
        <ModalBody style={{ backgroundColor: "#04162C", color: 'white' }}>
            <p className="text-white" style={{ fontWeight: "bold", fontSize: 20 }}>{contact}</p>
            <input style={{
                backgroundColor: "#04162C",
                borderRadius: 19,
                color: 'white',
                width: '100%',
                alignContent: "center"
            }} type="search" className="form-control" placeholder="Search a user by name or username..." />
            <div className="row mt-2">
                <div className="col-md-1">
                    <img src={profileimg} style={{ borderRadius: 100, height: 40, width: 40 }} />
                </div>
                <div className="col-md-7 text-white mt-2 ml-1">
                    <p>Yasir Ado Hassan <span className="text-secondary">@ysquareimperial</span></p>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-outline-primary" style={{ borderRadius: 20, marginLeft: 70 }}>{type}</button>
                </div>
            </div>
        </ModalBody>
        {/* <ModalFooter style={{ backgroundColor: "#04162C", borderColor: '#0b2e5c' }}>
            <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle2}>Cancel</Button>
            <Button style={{ borderRadius: 20 }} color="outline-primary" onClick={toggle2}>Save</Button>
        </ModalFooter> */}
        </Modal>
    )
}
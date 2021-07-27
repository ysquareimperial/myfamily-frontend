import React from 'react'
import './AlumniCSS.css'
import alumni from './download.png'
import child from './child.jpg'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function AlumniDetails() {
    return (
        <div className="jumbotron p-5">
            <div className="container pt-2">
                <h1 className="text-dark">Alumni Details</h1>
                <FormGroup>
                    <Input
                        type="search"
                        name="search"
                        id="exampleSearch"
                        placeholder="search photo by name..."
                    />
                </FormGroup>
                <h4 className="text-dark">Profile</h4>
                <div className="row">

                    <div className="col-md-2">
                        <div className="card-body">
                            <img src={alumni} />
                        </div>
                    </div>
                    <div className="col-md-8 pt-3" style={{lineHeight:1}}>
                        <p><b>Name:</b> Alumni Name</p>
                        <p><b>Address:</b> Alumni Address</p>
                        <p><b>Place of work:</b> Alumni Place of work</p>
                        <p><b>Course combination:</b> Alumni Course</p>
                    </div>
                </div>

                <h4 className="text-dark">Children Pictures</h4>
                <div className="row pt-4">

                    <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                        <div className="card">
                            <div className="card-body">
                                <img src={child} />
                            </div>
                            <div className="card-footer pb-0 pt-0">
                                <p>Name of a child</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                        <div className="card">
                            <div className="card-body">
                                <img src={child} />
                            </div>
                            <div className="card-footer pb-0 pt-0">
                                <p>Name  of a child</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                        <div className="card">
                            <div className="card-body">
                                <img src={child} />
                            </div>
                            <div className="card-footer pb-0 pt-0">
                                <p>Name  of a child</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                        <div className="card">
                            <div className="card-body">
                                <img src={child} />
                            </div>
                            <div className="card-footer pb-0 pt-0">
                                <p>Name  of a child</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                        <div className="card">
                            <div className="card-body">
                                <img src={child} />
                            </div>
                            <div className="card-footer pb-0 pt-0">
                                <p>Name  of a child</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                        <div className="card">
                            <div className="card-body">
                                <img src={child} />
                            </div>
                            <div className="card-footer pb-0 pt-0">
                                <p>Name  of a child</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
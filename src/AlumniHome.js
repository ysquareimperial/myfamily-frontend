import React from 'react'
import alumni from './download.png'
import './AlumniCSS.css'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function AlumniHome() {
    return (
        <div className="jumbotron p-5">
        <div className="container pt-2">
        <h1 className="text-dark">Home</h1>
            <FormGroup>
                <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="search photo by name..."
                />
            </FormGroup>
            <div className="row pt-4">
                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                    <div className="card">
                        <div className="card-body">
                            <img src={alumni} />
                        </div>
                        <div className="card-footer pb-0 pt-0">
                            <p>Name of Alumni</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                    <div className="card">
                        <div className="card-body">
                            <img src={alumni} />
                        </div>
                        <div className="card-footer pb-0 pt-0">
                            <p>Name of Alumni</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                    <div className="card">
                        <div className="card-body">
                            <img src={alumni} />
                        </div>
                        <div className="card-footer pb-0 pt-0">
                            <p>Name of Alumni</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                    <div className="card">
                        <div className="card-body">
                            <img src={alumni} />
                        </div>
                        <div className="card-footer pb-0 pt-0">
                            <p>Name of Alumni</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                    <div className="card">
                        <div className="card-body">
                            <img src={alumni} />
                        </div>
                        <div className="card-footer pb-0 pt-0">
                            <p>Name of Alumni</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 zoom">
                    <div className="card">
                        <div className="card-body">
                            <img src={alumni} />
                        </div>
                        <div className="card-footer pb-0 pt-0">
                            <p>Name of Alumni</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
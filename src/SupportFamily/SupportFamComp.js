import React from 'react'
import '../Index/Mobile.css'
import MobileNavbar from '../MobileNavbar/MobileNavbar'
export default function SupportFamComp() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 homeBorder">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="support-family-div">
                                <p style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Support Family</p>
                                <p className="text-white">Support your family by donating some funds.</p>
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>Donate Fund</button>
                                <p className="pt-2 text-white">The list of users below are those who donated to this family</p>
                                <table class="table table-striped text-white table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <br></br>
            <MobileNavbar/>
        </div>
    )
}
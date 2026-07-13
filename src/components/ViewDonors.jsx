import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewDonors = () => {

    const [ddata, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => (
                changeData(response.data)
            )
        ).catch()
    }

    useEffect(
        () => (
            fetchData()
        ), []
    )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-bordered align-middle text-center">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Gender</th>
                                                <th>Blood Group</th>
                                                <th>Phone</th>
                                                <th>City</th>
                                                <th>Weight (kg)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ddata.map(
                                                (value, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{value.donor_name}</td>
                                                            <td>{value.age}</td>
                                                            <td>{value.gender}</td>
                                                            <td>{value.blood_group}</td>
                                                            <td>{value.phone}</td>
                                                            <td>{value.city}</td>
                                                            <td>{value.weight_kg}</td>
                                                        </tr>
                                                    )
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDonors
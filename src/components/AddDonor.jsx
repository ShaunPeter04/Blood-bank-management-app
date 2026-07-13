import React, { useState } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar';

const AddDonor = () => {

    const [formData, setFormData] = useState({
        donor_name: '',
        age: '',
        gender: '',
        blood_group: '',
        phone: '',
        email: '',
        city: '',
        weight_kg: '',
        last_donation_date: ''
    });



    const inputHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-course", formData).then(

            (response) => (
                console.log(response.data)
            )

        ).catch(
            (error) => (
                console.error("Error Adding Course", error)
            )
        )

    }

    return (
        <div>

            <NavigationBar />
            <div className="container mt-5">
                <h2>Add Donor</h2>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'>Donor Name: </label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="donor_name"
                                    value={formData.donor_name}
                                    onChange={inputHandler}
                                    required
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'>Age: </label>
                                <input
                                    className='form-control'
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={inputHandler}
                                    required
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'>Gender: </label>
                                <select
                                    className='form-control'
                                    name="gender"
                                    value={formData.gender}
                                    onChange={inputHandler}
                                    required
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'>Blood Group: </label>
                                <select
                                    className='form-control'
                                    name="blood_group"
                                    value={formData.blood_group}
                                    onChange={inputHandler}
                                    required
                                >
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'>Phone: </label>
                                <input
                                    className='form-control'
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={inputHandler}
                                    required
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'>Email: </label>
                                <input
                                    className='form-control'
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'>City: </label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={inputHandler}
                                    required
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'>Weight (kg): </label>
                                <input
                                    className='form-control'
                                    type="number"
                                    name="weight_kg"
                                    value={formData.weight_kg}
                                    onChange={inputHandler}
                                    required
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className='form-label'   >Last Donation Date: </label>
                                <input
                                    className='form-control'
                                    type="date"
                                    name="last_donation_date"
                                    value={formData.last_donation_date}
                                    onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddDonor;
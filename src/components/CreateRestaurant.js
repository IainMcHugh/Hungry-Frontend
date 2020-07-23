import React, { useState } from 'react';
import axios from 'axios';

function CreateRestaurant() {
    const [restaurant, setRestaurant] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [license, setLicense] = useState('');
    const [password, setPassword] = useState('');

    const submitCreateRestaurant = e => {
        e.preventDefault();
        const newRestaurant = {
            restaurant: restaurant,
            owner: owner,
            email: email,
            license: license,
            password: password
        }
        console.log(newRestaurant);

        axios.post("http://localhost:4000/restaurants/register", newRestaurant)
        .then(res => {
            const token = res;
            localStorage.setItem('jwtToken', token);
        })
        .catch(err => console.log(err));

        // window.location ="/";
    }

    return (
        <div>
            <h3>Join Today!</h3>
            <form onSubmit={submitCreateRestaurant}>
                <div className="form-group">
                    <label htmlFor="restaurant">Restaurant Name: </label>
                    <input
                    name="restaurant"
                    required
                    className="form-control"
                    value={restaurant}
                    onChange={(e) => setRestaurant(e.target.value)} />
                    <label htmlFor="owner">Account Holder: </label>
                    <input
                    name="owner"
                    required
                    className="form-control"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)} />
                    <label htmlFor="email">Email: </label>
                    <input
                    name="email"
                    required
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="license">Restaurant License: </label>
                    <input
                    name="license"
                    required
                    className="form-control"
                    value={license}
                    onChange={(e) => setLicense(e.target.value)} />
                    <label htmlFor="password">Password: </label>
                    <input
                    name="password"
                    required
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="btn btn-primary my-2">Add your Restaurant</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRestaurant

import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
    const [username, setUsername] = useState('');

    const submitCreateUser = e => {
        e.preventDefault();
        const user = {
            username: username
        }
        console.log(user);

        axios.post("http://localhost:4000/users/add", user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

        // window.location ="/";
    }

    return (
        <div>
            <h3>Create new User</h3>
            <form onSubmit={submitCreateUser}>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input
                    name="username"
                    required
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                    <button type="submit" className="btn btn-primary my-2">Create New User</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser

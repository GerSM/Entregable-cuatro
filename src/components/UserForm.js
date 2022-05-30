import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserForm = ({ getUsers, userSelected, deselectUser }) => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ birthday, setBirthday ] = useState("")

    
    useEffect(() => {
        if(userSelected !== null){
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setBirthday(userSelected.birthday)
        }else{
            setEmail("")
            setPassword("")
            setFirstName("")
            setLastName("")
            setBirthday("")
        }
    }, [userSelected])

    const submit = e => {
        e.preventDefault()

        const user = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            birthday: birthday
        }
        if(userSelected !== null){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(() => 
                getUsers(),
                deselectUser())
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUsers())
            .catch(error => console.log(error.response))
        }
        
    }

    return (
    <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">
                Email address
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="email" 
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            
        </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                    First Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
        </div>
        <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
                    Last Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="last-name" 
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
        </div>
        <div className="mb-3">
            <label htmlFor="birthday" className="form-label">
                    Birthday
                </label>
                <input 
                    type="date" 
                    className="form-control" 
                    id="birthday" 
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
};

export default UserForm;
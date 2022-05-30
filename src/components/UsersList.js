import React from 'react';

const UsersList = ({ users, selectUser, removeUser }) => {
    return (
        <ul className="list-group">
            {
                users.map(user => (
                    <li key= {user.id} className="list-group-item">
                        <h1><b>Name:</b> {user.first_name} </h1>
                        <h1><b>Last name:</b> {user.last_name}</h1>
                        <h2><b>Email:</b> {user.email}</h2>
                        <h2><b>Birthday: </b> {user.birthday}</h2>
                        <button onClick={() => selectUser(user)} className='btn btn-warning'>Editar</button>
                        <button onClick={() => removeUser(user.id)} className="btn btn-danger">Eliminar</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;
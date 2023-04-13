import React, { useState } from 'react'
import UserContext from './UserContext'
import Swal from 'sweetalert2'
const UserState = (props) => {

    const allUser = []
    const [User, setUser] = useState(allUser)
    const getUser = async () => {
        const resp = await fetch(`http://localhost:4000/api/auth/getUser`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },

        });
        const json = await resp.json();
        setUser(json)
    }


    const edit = async (id, name, password) => {
        const resp = await fetch(`http://localhost:4000/api/auth/update/${id}`, {
            method: 'PUT',
            headers: {
                "auth-token": localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password })
        })
        // eslint-disable-next-line
        const json = await resp.json();
        let newData = JSON.parse(JSON.stringify(User))
        setUser(newData)
        Swal.fire(
            'Updated!',
            'Your note has been Updated.',
            'success'
        )
        getUser()
    }


    return (
        <UserContext.Provider value={{ User, getUser, setUser, edit }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
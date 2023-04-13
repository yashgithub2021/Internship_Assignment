import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
export const Login = () => {

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();

        const resp = await fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await resp.json()
        if (json.cred) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No User found....Please SignUp First',
            })
            setcredentials({ email: "", password: "" })
        }

        if (json.success) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Log In Successful!',
                showConfirmButton: false,
                timer: 1500
            })
            localStorage.setItem('token', json.jwtData)
            navigate('/')
        }
    }

    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-5">
            <form onSubmit={login}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={onchange} name='email' value={credentials.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={onchange} name='password' value={credentials.password} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

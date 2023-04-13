import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Signup = () => {

    const [credentials, setcredentials] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate()

    const signUp = async (e) => {
        e.preventDefault()

        const resp = await fetch('http://localhost:4000/api/auth/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });

        const json = await resp.json();
        console.log(json)

        if (json.checkUser) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email Already Exist!',
            })
        }

        if (json.success) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully Signed Up',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')
        }
    }


    const onChange = async (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-5">

            <form className='container' onSubmit={signUp}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={onChange} name='name' value={credentials.name} type="text" className="form-control" id="name" aria-describedby="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={onChange} name='email' value={credentials.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={onChange} name='password' value={credentials.password} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
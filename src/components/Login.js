import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import img from '../user3.png'
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
        <>
            <div className="container-fluid">

                <Card style={{ width: '28rem', position: 'relative', height: '32rem', backgroundColor: '#1d2c4e', boxshadow: '0px 20px 25px -13px rgba(0, 0, 0, 1)' }}>
                    <button className="btn position-absolute top-5 start-50 translate-middle">
                        SIGN IN
                    </button>

                    <svg id="wave" style={{ transform: "rotate(0deg)", transition: "0.3s", opacity: "30%" }} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-Color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(211.2, 208.433, 202.316, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,196L60,212.3C120,229,240,261,360,236.8C480,212,600,131,720,138.8C840,147,960,245,1080,285.8C1200,327,1320,310,1440,302.2C1560,294,1680,294,1800,310.3C1920,327,2040,359,2160,334.8C2280,310,2400,229,2520,171.5C2640,114,2760,82,2880,106.2C3000,131,3120,212,3240,245C3360,278,3480,261,3600,220.5C3720,180,3840,114,3960,147C4080,180,4200,310,4320,367.5C4440,425,4560,408,4680,359.3C4800,310,4920,229,5040,196C5160,163,5280,180,5400,163.3C5520,147,5640,98,5760,73.5C5880,49,6000,49,6120,57.2C6240,65,6360,82,6480,114.3C6600,147,6720,196,6840,204.2C6960,212,7080,180,7200,147C7320,114,7440,82,7560,114.3C7680,147,7800,245,7920,261.3C8040,278,8160,212,8280,179.7C8400,147,8520,147,8580,147L8640,147L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(192.986, 179.418, 175.06, 1)" offset="0%"></stop><stop stop-color="rgba(236.245, 236.245, 236.245, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 50px)", opacity: "0.9" }} fill="url(#sw-gradient-1)" d="M0,245L60,228.7C120,212,240,180,360,179.7C480,180,600,212,720,261.3C840,310,960,376,1080,400.2C1200,425,1320,408,1440,367.5C1560,327,1680,261,1800,261.3C1920,261,2040,327,2160,351.2C2280,376,2400,359,2520,294C2640,229,2760,114,2880,114.3C3000,114,3120,229,3240,228.7C3360,229,3480,114,3600,65.3C3720,16,3840,33,3960,49C4080,65,4200,82,4320,138.8C4440,196,4560,294,4680,351.2C4800,408,4920,425,5040,400.2C5160,376,5280,310,5400,294C5520,278,5640,310,5760,318.5C5880,327,6000,310,6120,285.8C6240,261,6360,229,6480,204.2C6600,180,6720,163,6840,130.7C6960,98,7080,49,7200,65.3C7320,82,7440,163,7560,212.3C7680,261,7800,278,7920,236.8C8040,196,8160,98,8280,65.3C8400,33,8520,65,8580,81.7L8640,98L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(224.861, 224.861, 224.861, 1)" offset="0%"></stop><stop stop-color="rgba(231.691, 231.691, 231.691, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 100px)", opacity: "0.8" }} fill="url(#sw-gradient-2)" d="M0,392L60,334.8C120,278,240,163,360,122.5C480,82,600,114,720,163.3C840,212,960,278,1080,261.3C1200,245,1320,147,1440,138.8C1560,131,1680,212,1800,204.2C1920,196,2040,98,2160,114.3C2280,131,2400,261,2520,302.2C2640,343,2760,294,2880,253.2C3000,212,3120,180,3240,212.3C3360,245,3480,343,3600,359.3C3720,376,3840,310,3960,294C4080,278,4200,310,4320,310.3C4440,310,4560,278,4680,261.3C4800,245,4920,245,5040,228.7C5160,212,5280,180,5400,204.2C5520,229,5640,310,5760,343C5880,376,6000,359,6120,367.5C6240,376,6360,408,6480,375.7C6600,343,6720,245,6840,204.2C6960,163,7080,180,7200,196C7320,212,7440,229,7560,236.8C7680,245,7800,245,7920,204.2C8040,163,8160,82,8280,98C8400,114,8520,229,8580,285.8L8640,343L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"></path></svg>
                    <Card.Body className='px-5'>
                        <form onSubmit={login}>
                            <img
                                src={img}
                                alt="User Logo"
                                className="position-absolute top-25 start-50 translate-middle"
                                style={{ transform: 'translateX(-50%)', zIndex: 2, width: '100px', height: '100px', top: "145px", color: "#80879f" }}
                            />
                            <InputGroup style={{ height: "3rem" }} data-bs-theme="dark" className="mt-5 mb-3">
                                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-user"></i></InputGroup.Text>
                                <Form.Control
                                    name='email'
                                    onChange={onchange}
                                    value={credentials.email}
                                    placeholder="email"
                                    aria-label="email"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup style={{ height: "3rem" }} data-bs-theme="dark" className="mb-2">
                                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                                <Form.Control
                                    name='password'
                                    onChange={onchange}
                                    value={credentials.password}
                                    placeholder="password"
                                    aria-label="password"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Row style={{ fontSize: '13px' }}>
                                <Col xs={6}>
                                    <Form.Group style={{ color: 'rgb(0, 245, 225)' }} className="mb-3" id="formGridCheckbox">
                                        <Form.Check style={{ color: 'rgb(0, 245, 225)', alignItems: 'center' }} type="checkbox" label="Remember me" className="custom-checkbox" />
                                    </Form.Group>
                                </Col>
                                <Col xs={6} className="text-end" >
                                    <Card.Link href="#" style={{ color: 'rgb(0, 245, 225)', textDecoration: 'none' }}>Forgot your password?</Card.Link>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={12} className="text-center" style={{ color: 'white' }}>Dont have Account?
                                    <Link to="/signup" style={{ color: 'rgb(0, 245, 225)', textDecoration: 'none' }}> Register</Link>
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col xs={12}>
                                    <button onSubmit={login} type="submit" style={{ width: '100%', borderRadius: '12px' }} className="btn">
                                        LOGIN
                                    </button>
                                </Col>
                            </Row>

                        </form>
                    </Card.Body>
                </Card>

            </div>
            {/* <div className="container my-5">
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
            </div> */}
        </>
    )
}

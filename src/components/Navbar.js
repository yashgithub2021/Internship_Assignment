import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Assignment</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form>
                        <Link className=" btn btn-primary " aria-current="page" to="/signup">Sign Up</Link>


                        <Link className=" btn btn-primary mx-3" aria-current="page" to="/login">Login</Link>
                    </form> : <div className="dropstart">
                        <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Welcome
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><Link onClick={logout} to="/login" className="dropdown-item" role="button">Logout</Link></li>
                        </ul>
                    </div>
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar
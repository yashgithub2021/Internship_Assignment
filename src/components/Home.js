import React, { useEffect } from 'react'
import User from './User'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }// eslint-disable-next-line
    }, [])

    return (
        <User></User>
    )

}

export default Home
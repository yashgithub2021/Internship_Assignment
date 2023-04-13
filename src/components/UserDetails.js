import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'

const UserDetails = () => {

    useEffect(() => {
        getUser()
        // eslint-disable-next-line
    }, [])

    const context = useContext(UserContext)
    const { getUser, User } = context
    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="row card-header bg-transparent border-0 text-center">
                    <h3 className="col mb-0"><i className="far fa-clone pr-1 mx-2"></i>User Information</h3>
                    <h3 type="button" className={`col mb-0 `} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-user-pen mx-2 btn btn-success">  Edit</i></h3>
                </div>
                <div className={`card-body pt-0 my-2`}>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>:</td>
                                <td>
                                    {User.name}
                                </td>
                            </tr>
                            <tr>
                                <th >Email</th>
                                <td >:</td>
                                <td>
                                    {User.email}
                                </td>
                            </tr>
                            <tr>
                                <th width="10%">Password</th>
                                <td width="1%">:</td>
                                <td width="85%">
                                    {User.password}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="card-header bg-transparent border-0 text-center">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
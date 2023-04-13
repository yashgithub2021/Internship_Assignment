import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import UserDetails from './UserDetails'

const User = () => {

    const context = useContext(UserContext)
    const { User, edit } = context

    const onchange = (e) => {
        setnewUser({ ...User, [e.target.name]: e.target.value })
    }

    const [newUser, setnewUser] = useState({ id: "", newName: "", newPassword: "" })
    const update = () => {
        edit(newUser._id, newUser.newName, newUser.newPassword)
    }
    return (
        <>
            <div className="container my-5">
                <UserDetails />
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Update User Details</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className={`card-body pt-0 my-2`}>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Enter new Name</th>
                                                <td>:</td>
                                                <td>
                                                    <input onChange={onchange} className='input' type="text" name="newName" value={newUser.newName} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Enter new Password</th>
                                                <td width="1%">:</td>
                                                <td width="75%">
                                                    <input onChange={onchange} className='input' type="text" name="newPassword" value={newUser.newPassword} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={update} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Ends */}

            </div>
        </>

    )
}

export default User
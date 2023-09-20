import React from 'react'
import { Link } from 'react-router-dom'

function UserRegistor() {
    return (
        <div className='container page'>
            <div className='row justify-content-center'>
                
                <div className='col-6'>
                    <div className='container-fluid shadow p-5 bg-info rounded-5'>
                        <div className='row border'>
                        <div className='col-12 text-center p-3'>
                    <p className='h2'>User Registor Page</p>
                </div>
                            <div className='col-md-6 p-3'>
                                <label class="form-label">UserName</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div className='col-md-6 p-3'>
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div className='col-md-6 p-3'>
                                <label class="form-label">Gender</label>
                                <select className='form-control'>
                                        <option>Male</option>
                                        <option>Female</option>
                                </select>
                            </div>
                            <div className='col-md-6 p-3'>
                                <label class="form-label">Phone No</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div className='col-12 p-3 text-center'>
                            <button className='btn btn-primary'>Registor user</button>
                            <button className='btn btn-danger ms-3'>Cancle</button>
                            <Link className='btn ms-3' to="/">login</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRegistor
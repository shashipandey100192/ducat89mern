import React from 'react';
import { Link } from 'react-router-dom';

function Userlogin() {
    return (
        <div className='container page'>
            <div className='row'>
                <div className='col-12'>
                    
                    <div className='container-fluid userpage border shadow p-5'>
                        <div className='row'>
                        <h1>Login page</h1>
                            <div className='col-12'>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" />
                                        <div className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <Link className="btn" to="landing">dashboard</Link>
                                    <Link to="registor">new user</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlogin
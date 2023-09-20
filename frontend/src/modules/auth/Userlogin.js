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
                                    <div class="mb-3">
                                        <label class="form-label">Email address</label>
                                        <input type="email" class="form-control" />
                                        <div class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" />
                                    </div>

                                    <button type="submit" class="btn btn-primary">Submit</button>
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
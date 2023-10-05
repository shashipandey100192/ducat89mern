import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Userlogin() {
    const [ulogin,setlogin]= useState({
        email:"",
        pass:""
      });

      const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setlogin((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }


    const mylogin = async(e)=>{
        e.preventDefault();
        const {email,pass} = ulogin;
        
        const mydata = await fetch("http://localhost:7800/login",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            email,pass
          })
        })
        const res = await mydata.json();
        console.log(res);
        if(res.status===200)
        {
            window.location.href="/landing";
        }
      }


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
                                        <input type="email" className="form-control" value={ulogin.email} onChange={setdata} name="email" />
                                        <div className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" value={ulogin.pass} onChange={setdata} name="pass" />
                                    </div>

                                    <button type="submit" className="btn btn-primary" onClick={mylogin}>Submit</button>
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
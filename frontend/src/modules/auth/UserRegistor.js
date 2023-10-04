import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function UserRegistor() {
    const [sv,sf]= useState({
        name:"",
        email:"",
        gender:"",
        phone:"",
        city:"",
        pass:""
      });

      const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        sf((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }

    const mysubmit = async ()=>{
        if(sv.name==="" || sv.email==="" || sv.pass==="")
        {
            alert("please fill forms");
        }
        else{
        const { name, email, phone, city, gender,pass } = sv;
        const res = await fetch("http://localhost:7800/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name, email, phone, city, gender,pass
            })
        })
        const data = await res.json();
        console.log(data);
        window.location.href="/";
    
        }
    
    }



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
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={sv.name} onChange={setdata}/>
                            </div>
                            <div className='col-md-6 p-3'>
                                <label className="form-label">Email Id</label>
                                <input type="email" className="form-control" name="email" value={sv.email} onChange={setdata}/>
                            </div>
                            <div className='col-md-6 p-3'>
                                <label className="form-label">Gender</label>
                                <select className='form-control' name='gender' value={sv.gender} onChange={setdata}>
                                        <option>Male</option>
                                        <option>Female</option>
                                </select>
                            </div>
                            <div className='col-md-6 p-3'>
                                <label className="form-label">Phone No</label>
                                <input type="text" className="form-control" name='phone' value={sv.phone} onChange={setdata}/>
                            </div>
                            <div className='col-md-6 p-3'>
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={sv.city} onChange={setdata}/>
                            </div>
                            <div className='col-md-6 p-3'>
                                <label className="form-label">Password</label>
                                <input type="text" className="form-control" name="pass" value={sv.pass} onChange={setdata}/>
                            </div>
                            <div className='col-12 p-3 text-center'>
                            <button className='btn btn-primary' onClick={mysubmit}>Registor user</button>
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
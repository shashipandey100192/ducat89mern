import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function Editpage() {
    const {id} =useParams();
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

      const singledata = () => {
        axios.get(`https://mernfullstack-b6zf.onrender.com/view/${id}`).then((res) => {
            console.log(res.data);
            sf(res.data);
        })

    }
    useEffect(() => {
        singledata();
    },[]);

      
    const updatefuncion = async () => {
      const {name,email,phone,gender,city,pass} = sv;
      
      const res = await fetch(`https://mernfullstack-b6zf.onrender.com/updaterecord/${id}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          name,email,phone,gender,city,pass
        })
        
      })
      window.location.href="/landing";
      
      const data1 = await res.json();
      console.log(data1);
  
}
    




  return (
    <div className='container page'>
    <div className='row justify-content-center'>
        
        <div className='col-6'>
            <div className='container-fluid shadow p-5 bg-warning rounded-5'>
                <div className='row border'>
                <div className='col-12 text-center p-3'>
            <p className='h2'>User Edit Record Page</p>
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
                    <button className='btn btn-primary' onClick={updatefuncion}>Update Record</button>
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

export default Editpage
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detailspage() {
    const {id} =useParams();
    const [mydata, setdata] = useState({});
    const singledata = () => {
        axios.get(`http://localhost:7800/view/${id}`).then((res) => {
            console.log(res.data);
            setdata(res.data);
        })

    }

    useEffect(() => {
        singledata();
    },[]);



    return (
        <div className='container page border' >
            <div className='row'>
                <div className='col-12'>
                    <h1>Details page</h1>
                    <div className="card border-primary mb-3">
                        <div className="card-header"><h1>Name: {mydata.Name}</h1></div>
                        <div className="card-body text-primary">
                            <h5 className="card-title">City: {mydata.city}</h5>
                            <h5 className="card-title">Phone No: {mydata.phone}</h5>
                            <h5 className="card-title">Email Id: {mydata.email}</h5>
                            <h5 className="card-title">Gender: {mydata.gender}</h5>
                            <h5 className="card-title">Id: {mydata._id}</h5>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailspage
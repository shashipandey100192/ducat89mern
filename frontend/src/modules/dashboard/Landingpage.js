import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Landingpage() {
    const [mydata, setdata] = useState([]);
    const mygetalldata = () => {
        axios.get('http://localhost:7800/getdata').then((res) => {
            console.log(res.data);
            setdata(res.data);
        })

    }
    useEffect(() => {
        mygetalldata();
    }, []);


    return (
        <div className='container page border'>
            <div className='row'>
                <div className='col-12'>
                    <h1>dashboard</h1>
                    <button type="button" onClick={mygetalldata}>fetch data</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">MongoDBId</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">City</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mydata.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <th scope="row">{item._id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.city}</td>
                                        <td>
                                            <Link className='btn btn-info btn-sm' to={`details/${item._id}`}>View</Link>
                                            <button className='btn btn-warning btn-sm ms-2'>Edit</button>
                                            <button className='btn btn-danger btn-sm ms-2'>Del</button>
                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Landingpage
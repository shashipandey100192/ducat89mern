import React,{useEffect, useState} from 'react';
import axios from 'axios';


function Landingpage() {
const [mydata, setdata]=useState([]);
        const mygetalldata = ()=>{
            axios.get('http://localhost:7800/getdata').then((res)=>{
                console.log(res.data);
                setdata(res.data);
            })

        }


    useEffect(() => {
        // mygetalldata();
      },[]);
   

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
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mydata.map((item)=>{
                                return(
                                    <tr>
                                    <th scope="row">{item._id}</th>
                                    <td>{item.Item}</td>
                                    <td>{item.Region}</td>
                                    <td>{item.Rep}</td>
                                    <td>{item.Cost}</td>
                                    <td>{item.Units}</td>
                                    
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
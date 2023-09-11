import React from 'react'

function Landingpage() {
    return (
        <div className='container page border'>
            <div className='row'>
                <div className='col-12'>
                    <h1>dashboard</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Landingpage
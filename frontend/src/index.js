import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./modules/css/global.css";

import Mynavbar from './modules/shares/Mynavbar';
import UserRegistor from './modules/auth/UserRegistor';
import Landingpage from './modules/dashboard/Landingpage';
import Userlogin from './modules/auth/Userlogin';
import Detailspage from './modules/dashboard/Detailspage';
import Editpage from './modules/dashboard/Editpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Mynavbar/>
      <Routes>
      <Route path='/' element={<Userlogin/>}></Route>
        <Route path='/landing' element={<Landingpage/>}></Route>
        <Route path='registor' element={<UserRegistor/>}></Route>
        <Route path='landing/view/:id' element={<Detailspage/>}></Route>
        <Route path='landing/editrecord/:id' element={<Editpage/>}></Route>
      </Routes>
    
    </BrowserRouter>
   
  </React.StrictMode>
);



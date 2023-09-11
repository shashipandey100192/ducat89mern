import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./modules/css/global.css";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Mynavbar from './modules/shares/Mynavbar';
import UserRegistor from './modules/auth/UserRegistor';
import Landingpage from './modules/dashboard/Landingpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Mynavbar/>
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='registor' element={<UserRegistor/>}></Route>
      </Routes>
    
    </BrowserRouter>
   
  </React.StrictMode>
);



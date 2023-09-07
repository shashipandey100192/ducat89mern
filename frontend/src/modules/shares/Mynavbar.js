import React from 'react'
import { Link } from 'react-router-dom'

function Mynavbar() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex me-5">
        <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" style={{position: "absolute", inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(0px, 172px)'}} data-popper-placement="top-start">
        <li><a className="dropdown-item" href="#">Login</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><Link className="dropdown-item" to="registor">Registor</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
      </form>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
  )
}

export default Mynavbar
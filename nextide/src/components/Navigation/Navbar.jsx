import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">NexTide</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Homepage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1"><SearchIcon /></span>
                            <input type="text" className="form-control" placeholder="Search for your next adventure" aria-label="Search" aria-describedby="basic-addon1" />
                        </div>
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><PersonIcon /><span className="badge bg-secondary">5</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><MessageIcon /><span className="badge bg-secondary">4</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><SettingsIcon /><span className="badge bg-secondary">2</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="/images/sonal.jpg" alt="" className="profilepicimage" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

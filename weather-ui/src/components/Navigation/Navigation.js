import React from 'react';
import { Link } from "react-router-dom";

const navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="text-decoration-none" to="/">
                        <div className="nav-link">Home </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className=" text-decoration-none" to="/history">
                        <div className="nav-link">History </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className=" text-decoration-none" to="/import">
                        <div className="nav-link">Import data </div>
                    </Link>
                </li>
            </ul>
        </div>
    </nav >
);

export default navigation;


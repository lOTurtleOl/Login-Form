import React from 'react';
import './App.css'

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li>
                        <h3>Navbar</h3>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Activities from './Activities';
import Payments from './Payment';
import Login from './Login';
import FeedBack from './Feedback';
import Progress from './Progress';
import AdminDashBoard from './AdminDash';
import Home from "./Home";

function Header() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/adminDas">AdminDash</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/feedBack">Feedback</Link>
                    </li>
                    <li>
                        <Link to="/payment">Payment</Link>
                    </li>
                    <li>
                        <Link to="/progress">Progress</Link>
                    </li>
                    <li>
                        <Link to="/activities">Activities</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adminDas" element={<AdminDashBoard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feedBack" element={<FeedBack />} />
                <Route path="/payment" element={<Payments />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/activities" element={<Activities />} />
            </Routes>

        </Router>
    );
}

export default Header;

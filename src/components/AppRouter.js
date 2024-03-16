import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Ad from "../pages/Ad";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to="/" className="navbar-brand">Главная</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Главная</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/ad" className="nav-link">Объявления</Link>
                            </li>

                            <li className="nav-item my-class">
                                <Link to="/signin" className="nav-link">Войти</Link>
                            </li>

                            <li className="nav-item justify-content-end">
                                <Link to="/signup" className="nav-link">Зарегистрироваться</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/signin" element={<Signin/>}/>
                        <Route path="/ad" element={<Ad/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default AppRouter;
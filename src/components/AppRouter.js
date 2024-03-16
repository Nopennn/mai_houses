import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Ad from "../pages/Ad";
import Auth from "../pages/Auth";
import Main from "../pages/Main";

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
                                <Link to="/auth" className="nav-link">Войти</Link>
                            </li>

                            <li className="nav-item justify-content-end">
                                <Link to="/auth" className="nav-link">Зарегистрироваться</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main>
                    <Routes>
                        <Route path="/ad" element={<Ad/>}/>
                        <Route path="/auth" element={<Auth/>}/>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/user" element={<Main/>}/>
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default AppRouter;
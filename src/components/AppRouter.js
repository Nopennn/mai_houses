import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Ad from "../pages/Ad";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <nav className="navbar">
                    <ul className="link-list left-links">
                        <li className="nav-item left-link">
                            <Link to="/" className="nav-link main-link">Главная</Link>
                        </li>
                        <li className="nav-item left-link">
                            <Link to="/ad" className="nav-link ">Объявления</Link>
                        </li>
                    </ul>

                    <ul className="link-list right-links">
                        <li className="nav-item right-link">
                            <Link to="/signin" className="nav-link">Войти</Link>
                        </li>

                        <li className="nav-item right-link">
                            <Link to="/signup" className="nav-link">Зарегистрироваться</Link>
                        </li>
                    </ul>
                </nav>
                <br/><br/>
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
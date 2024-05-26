import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Search from "../pages/Search";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import MakeAd from "../pages/MakeAd";
import UpdateProfile from "../pages/UpdateProfile";
import Moderation from "../pages/Moderation";
import Offer from "../pages/Offer";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <nav className="navbar">
                    <ul className="link-list left-links">
                        <li className="nav-item left-link">
                            <Link to="/" className="nav-link main-link">
                                <div className="logo">
                                    <img src={"home_logo.png"} alt="Главная" height="20px" width="auto"/>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item left-link">
                            <Link to="/offers" className="nav-link ">Объявления</Link>
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
                        <Route path="/offers" element={<Search/>}/>
                        <Route path="/offers/:id" element={<Offer/>} />
                        <Route path="/profile/*" element={<Profile/>}/>
                        <Route path="/makead" element={<MakeAd/>}/>
                        <Route path="/profileupd" element={<UpdateProfile/>}/>
                        <Route path="/moderation" element={<Moderation/>}/>

                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default AppRouter;
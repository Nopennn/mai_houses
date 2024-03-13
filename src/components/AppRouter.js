import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Ad from "../pages/Ad";
import Auth from "../pages/Auth";
import Main from "../pages/Main";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <header>
                    <nav>
                        <ul className="NavBar">
                            <li>
                                <Link to="/">Главная</Link>
                            </li>
                            <li>
                                <Link to="/ad">Объявление</Link>
                            </li>
                            <li>
                                <Link to="/auth">Вход</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to="/" className="navbar-brand">Главная</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <Link to="/ad" className="nav-link">Объявления</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/ad" className="nav-link">Объявления</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </nav>

                <main>
                    <Routes>
                        <Route path="/ad" element={<Ad/>}/>
                        <Route path="/auth" element={<Auth/>}/>
                        <Route path="/" element={<Main/>}/>
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default AppRouter;
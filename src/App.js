import './App.css';
import {useState} from "react";
import Ad from "./pages/Ad";
import Main from "./pages/Main";
import Auth from "./pages/Auth";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';


function App() {
    const [users, setUsers] = useState(0)

    let increment = () => {
        setUsers(users + 1)
    }
    let decrement = () => {
        setUsers(users - 1)
    }

    return (

        <div className="App">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin></script>

            <script>var Alert = ReactBootstrap.Alert;</script>

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
            <h1>{users}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;

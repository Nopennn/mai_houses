import './App.css';
import {useState} from "react";
import AppRouter from "./components/AppRouter";


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

            <AppRouter></AppRouter>
            <h1>{users}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;

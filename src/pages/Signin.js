import React, {useState} from 'react';
import axios from "axios";

const Signin = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const postSignInData = (login, password) => {
        axios.post('https://mai-houses.onrender.com/user/signin', {
            login: login,
            password: password
        })
            .then(function (response) {
                setServerResponse(response.data)
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            Вход
            <label htmlFor="login">Логин</label>
            <input type="text" value={login} id="login" onChange={event => setLogin(event.target.value)}/>
            <label htmlFor="password">Пароль</label>
            <input type="password" value={password} id="password"
                   onChange={event => setPassword(event.target.value)}/>
            <button
                onClick={() => postSignInData(login, password)}>
                Войти
            </button>

            <h1>Ответ сервера: {serverResponse.message}</h1>
        </div>
    );
};

export default Signin;
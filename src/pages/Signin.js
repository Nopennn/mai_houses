import React, {useState} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';


const SigninForm = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const postSignInData = (login, password) => {
        axios.post('https://mai-houses.onrender.com/user/signin', {
            login: login,
            password: password
        })
            .then(function (response) {
                window.location.href = "/profile";
                console.log(login)
                setServerResponse(response.data)
                console.log(response)
                Cookies.set("auth_token", response.data.auth_token, { expires: 7 })
                if (response.data.auth_token == null) {
                    console.log("Trouble")
                } else {
                    console.log("No trouble")
                    console.log(response.data.auth_token)
                }
                let cook = Cookies.get("auth_token")
                console.log(cook)
                // window.location.href = 'http://localhost:2000/profile';
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <input type="text" value={login} id="login" placeholder="Логин" onChange={event => setLogin(event.target.value)}/>
            <input type="password" value={password} id="password" placeholder="Пароль"
                   onChange={event => setPassword(event.target.value)}/>
            <br></br>
            <p>
                <button
                    onClick={() => postSignInData(login, password)}>
                    Войти
                </button>
            </p>


            <h1>Ответ сервера: {serverResponse.message}</h1>
        </div>
    )
}

const Authorised = () => {
    return (
        <div>
            <h2>Вы авторизированы!</h2>
        </div>
    )
}

const Signin = () => {

    return (
        <div className="signin">
            <br/><br/>
            <h1>Вход</h1>
            {Cookies.get("auth_token") ? Authorised() : SigninForm()}

        </div>
    );
};

export default Signin;
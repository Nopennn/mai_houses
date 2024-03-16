import React, {useState} from 'react';
import axios from "axios";

const Auth = () => {
    const [userInfo, setUserInfo] = useState({key: "valueeee"})

    axios.post('http://localhost:3000/user/signup', {
        login: "nopen2",
        password: "123",
        name: "Oleg",
        surname: "Abramovski",
        email: "ab2@mail",
        phone: "+79613027032",
        age: "18",
        gender: "m",
        about: "student",
        wanted: "a house",
        tags: []
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    let myvar = 15

    return (
        <div>
            Авторизация

            <h1>{userInfo.key}</h1>
        </div>
    );
};

export default Auth;
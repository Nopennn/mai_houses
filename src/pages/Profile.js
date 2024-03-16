import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {
    // const [users, setUsers] = useState(null)
    //
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const response = await fetch('http://localhost:3000/')
    //         const json = response.json()
    //         if(response.ok) {
    //             setUsers(json)
    //         }
    //     }
    //     fetchUsers()
    //
    // }, []);

    const [userInfo, setUserInfo] = useState({key: "valueeee"})

    axios.post('localhost:3000/user/signup', {
        login: "nopen",
        password: "123",
        name: "Oleg",
        surname: "Abramovski",
        email: "ab@mail",
        phone: "+79613027037",
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
            Профиль
            <h1>{myvar}</h1>
        </div>
    );
};

export default Profile;
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "js-cookie";

const Profile = () => {

    const [userInfo, setUserInfo] = useState({key: "valueeee"})

    window.onload = function () {
        axios.post('https://mai-houses.onrender.com/user/profile', {
            token: Cookies.get("auth_token")
        })
            .then(function (response) {
                console.log(response);
                setUserInfo(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            Профиль
            <h1>{userInfo.login}</h1>
        </div>
    );
};

export default Profile;
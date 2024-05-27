import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Profile = () => {
    useEffect(() => {
        profileFetch();
    }, []);

    const [userInfo, setUserInfo] = useState({key: "valueeee"})

    const profileFetch = function () {
        axios.post('https://mai-houses.onrender.com/user/profile', {
            token: Cookies.get("auth_token")
        })
            .then(function (response) {
                Cookies.set("user_id", response.data._id, { expires: 7 })
                Cookies.set("user_role", response.data.role, { expires: 7 })
                console.log(response);
                setUserInfo(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <br/><br/>
            <h1>Профиль</h1>
            <h1>{userInfo.login}</h1>

            <ul className="link-list right-links">
                <li className="nav-item right-link">
                    <Link to="/makead" className="nav-link">Разместить объявление</Link>
                </li>
                <li className="nav-item right-link">
                    <Link to="/profileupd" className="nav-link">Редактировать профиль</Link>
                </li>
                {Cookies.get("user_role") &&
                    <li className="nav-item right-link">
                        <Link to="/moderation" className="nav-link">Модерация</Link>
                    </li>}
            </ul>
        </div>
    );
};

export default Profile;
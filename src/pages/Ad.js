import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Ad = () => {
    const [adsInfo, setAdsInfo] = useState({key: "valueeee"})

    window.onload = function () {
        axios.post('https://mai-houses.onrender.com/ad', {
            token: Cookies.get("auth_token")
        })
            .then(function (response) {
                console.log(response);
                setAdsInfo(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br>
            Страница объявления
        </div>
    );
};

export default Ad;
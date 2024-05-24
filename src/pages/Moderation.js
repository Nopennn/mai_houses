import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Offer from "../components/Offer";

const Moderation = () => {
    const [adsInfo, setAdsInfo] = useState([])

    window.onload = function () {
        axios.post('https://mai-houses.onrender.com/houses/in_moderation', {
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
            <br></br><br></br><br></br>
            <h1>Moderation</h1>
            {adsInfo.map((offer, index) => (
                <Offer name={offer.name} address={offer.address} price={offer.price} photo_links={offer.photo_links} key={index}/>
            ))}
        </div>
    );
};

export default Moderation;
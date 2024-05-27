import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import OfferListElement from "../components/OfferListElement";

const Moderation = () => {
    useEffect(() => {
        offersFetch();
    }, []);
    const [adsInfo, setAdsInfo] = useState([])

    const offersFetch = function () {
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
            <br/><br/>
            <h1>Модерация</h1>
            {adsInfo.map((offer, index) => (
                <OfferListElement name={offer.name} address={offer.adress} price={offer.price} photo_links={offer.photo_links} id={offer._id} key={index}/>
            ))}
        </div>
    );
};

export default Moderation;
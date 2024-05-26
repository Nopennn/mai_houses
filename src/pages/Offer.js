import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import OfferInfo from "../components/OfferInfo";
import ModerationBlock from "../components/ModerationBlock";

const Offer = () => {
    useEffect(() => {
        offerFetch();
    }, []);

    const [offerInfo, setOfferInfo] = useState([])

    const offerFetch = function () {
        let urlSplit = window.location.href.split('/');
        let offerId = urlSplit[urlSplit.length - 1]
        console.log(offerId)
        axios.post(`https://mai-houses.onrender.com/houses/${offerId}`, {
            token: Cookies.get("auth_token")
        })
            .then(function (response) {
                console.log(response);
                setOfferInfo(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            Объявление
            <h1>{offerInfo.adress}</h1>

            <OfferInfo/>
            {Cookies.get("user_role") == "admin" &&
                <ModerationBlock/>
            }


            {/*<ul className="link-list right-links">*/}
            {/*    <li className="nav-item right-link">*/}
            {/*        <Link to="/makead" className="nav-link">Модерировать</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </div>
    );
};

export default Offer;
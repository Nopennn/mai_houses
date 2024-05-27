import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import OfferListElement from "../components/OfferListElement";


const Unauthorised = () => {
    return (
        <div>
            <h2>Вы не авторизированы!</h2>
        </div>
    )
}
const Search = () => {
    useEffect(() => {
        offersFetch(searchType);
    }, []);

    const [adsInfo, setAdsInfo] = useState([])
    const [searchType, setSearchType] = useState("housing")

    const offersFetch = function (type) {
        axios.post('https://mai-houses.onrender.com/houses', {
            token: Cookies.get("auth_token"),
            type: type
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
            <h1>Объявления</h1>
            <button
                className = "search-housing" onClick={() => setSearchType("housing")}
                style={{
                    backgroundColor: searchType == "housing" ? "#FF8959" : "#ffffff",
                    color: searchType == "housing" ? "#ffffff" : "#FF8959"
                }}>
                Поиск жилья
            </button>
            <button
                className = "search-person" onClick={() => setSearchType("person")}
                style={{
                    backgroundColor: searchType == "person" ? "#FF8959" : "#ffffff",
                    color: searchType == "person" ? "#ffffff" : "#FF8959"
                }}>
                Поиск соседей
            </button>
            {Cookies.get("auth_token") ? null : Unauthorised()}
            {adsInfo.slice(0).reverse().map((offer, index) => (
                <OfferListElement name={offer.name} address={offer.adress} price={offer.price} photo_links={offer.photo_links} id={offer._id} key={index} about={offer.about} type={offer.type}/>
            ))}
        </div>
    );
};

export default Search;
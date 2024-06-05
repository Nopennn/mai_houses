import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import OfferListElement from "../components/OfferListElement";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Unauthorised = () => {
    return (
        <div>
            <h2>Вы не авторизированы!</h2>
        </div>
    )
}


const Search = () => {


    const [gender, setGender] = useState("m")
    const [adsInfo, setAdsInfo] = useState([])
    const [searchType, setSearchType] = useState("housing")
    const [minPrice, setMinPrice] = useState(10000)
    const [maxPrice, setMaxPrice] = useState(30000)
    let rerender = 0;

    useEffect(() => {
        offersFetch(searchType, minPrice, maxPrice, gender);
    }, [searchType, rerender]);

    const HousingFilters = () => {
        return (
            <div className="slider-container">
                <h3>Цена, ₽:</h3>
            </div>
        )
    }
    const PersonFilters = () => {

        return (
            <div className="slider-container">
                <h3>Пол:</h3>
                <input type="radio" value={gender} id="male" name="gender"
                       onChange={event => setGender("m")}/>
                <label htmlFor="male">Мужской      </label>
                <input type="radio" value={gender} id="female" name="gender"
                       onChange={event => setGender("f")}/>
                <label htmlFor="female">Женский</label>
                <h3>Бюджет, ₽:</h3>
            </div>
        )
    }
    const offersFetch = function (type, min, max, gender) {
        console.log([gender])
        axios.post('https://mai-houses.onrender.com/houses', {
            token: Cookies.get("auth_token"),
            types: type,
            min_price: min,
            max_price: max,
            genders: [gender]
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
            {searchType=="housing" ? HousingFilters() : PersonFilters()}
            <div className="slider-container">

                <RangeSlider className = "price-range" min={0} max={100000} step={1000} value ={[minPrice, maxPrice]} onInput = { (value, userInteraction) => {
                    setMinPrice(value[0])
                    setMaxPrice(value[1])
                }} onThumbDragEnd = {()=>{
                    offersFetch(searchType, minPrice, maxPrice, gender);
                }}/>
                <div className="prices">
                    <input className="price-borders" type="number" value={minPrice} id="min-price" placeholder="От"
                           onChange={event => setMinPrice(event.target.value)}/>
                    <input className="price-borders" type="number" value={maxPrice} id="max-price" placeholder="До"
                           onChange={event => setMaxPrice(event.target.value)}/>
                </div>
            </div>


            {Cookies.get("auth_token") ? null : Unauthorised()}
            {adsInfo.slice(0).reverse().map((offer, index) => (
                <OfferListElement name={offer.name} address={offer.adress} price={offer.price} photo_links={offer.photo_links} id={offer._id} key={index} about={offer.about} type={offer.type}/>
            ))}
        </div>
    );
};

export default Search;
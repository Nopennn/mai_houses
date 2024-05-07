import React, {useState} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

const MakeAd = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const [about, setAbout] = useState("")
    const postAdData = (price, type, address, tags, about, photo_links) => {
        axios.post('https://mai-houses.onrender.com/houses/create', {
            token: Cookies.get("auth_token"),
            price: price,
            adress: address,
            type: "housing",
            tags: [],
            about: about,
            photo_links: []
        })
            .then(function (response) {
                setServerResponse(response.data)
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="signin">
            <br></br><br></br><br></br><br></br>
            Создание объявления
            <br></br>
            <input type="text" value={address} id="address" placeholder="Адрес"
                   onChange={event => setAddress(event.target.value)}/>
            <input type="number" value={price} id="price" placeholder="Цена"
                   onChange={event => setPrice(event.target.value)}/>
            <input type="text" value={type} id="type" placeholder="housing"
                   onChange={event => setType(event.target.value)}/>
            <input type="text" value={about} id="about" placeholder="О жилье"
                   onChange={event => setAbout(event.target.value)}/>
            <p>
                <button
                    onClick={() => postAdData(price, type, address, [], about, [])}>
                    Разместить
                </button>
            </p>


            <h1>Ответ сервера: {serverResponse.message}</h1>
        </div>
    );
};

export default MakeAd;
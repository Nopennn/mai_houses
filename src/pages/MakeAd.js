import React, {useState} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

const MakeAd = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const postAdData = (price, type, adress, tags, about, photo_links) => {
        axios.post('https://mai-houses.onrender.com/houses/create', {
            token: Cookies.get("auth_token"),
            user_id: Cookies.get("user_id"),
            price: price,
            adress: adress,
            type: type,
            tags: tags,
            about: about,
            photo_links: photo_links
        })
            .then(function (response) {
                setServerResponse(response.data)
                console.log(response)
                if (response.data.auth_token == null) {
                    console.log("Trouble")
                } else {
                    console.log("No trouble")
                }
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
            <input type="text" value={email} id="login" onChange={event => setEmail(event.target.value)}/>
            <input type="text" value={price} id="password"
                   onChange={event => setPrice(event.target.value)}/>
            <input type="text" value={type} id="type" onChange={event => setType(event.target.value)}/>
            <button
                onClick={() => postAdData(email, price, type, {}, "", "")}>
                Разместить
            </button>

            <h1>Ответ сервера: {serverResponse.message}</h1>
        </div>
    );
};

export default MakeAd;
import React, {useState} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import imageToBase64 from "image-to-base64/browser";
import OfferListElement from "../components/OfferListElement";

const MakeAd = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const [about, setAbout] = useState("")
    const [pictures, setPictures] = useState({})
    const [base64Pictures, setBase64Pictures] = useState([])

    // const fileSelector = document.getElementById('file-selector');
    // fileSelector.addEventListener('change', (event) => {
    //
    // });

    const  encodePictures = (pictureList) => {
        console.log(Array.from(pictureList))
        Array.from(pictureList).forEach((picture) => {
            base64Pictures.push(imageToBase64(picture))
        })
        console.log(base64Pictures)
    }
    const postAdData = (price, type, address, tags, about, photo_links) => {
        console.log("Posting...")
        console.log(Cookies.get("auth_token"))
        axios.post('https://mai-houses.onrender.com/houses/create', {
            token: Cookies.get("auth_token"),
            price: price,
            adress: address,
            type: "housing",
            tags: [],
            about: about,
            photo_links: photo_links
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
            <input type="file" id="file-selector" multiple accept=".jpg, .jpeg, .png"
                   onChange={event => {
                       const fileList = event.target.files;
                       console.log(fileList);
                       setPictures(event.target.files)
                       encodePictures(event.target.files)
                   }}
            />
            <p>
                <button
                    onClick={() => postAdData(price, type, address, [], about, base64Pictures)}>
                    Разместить
                </button>
            </p>


            <h1>Ответ сервера: {serverResponse.message}</h1>
        </div>
    );
};

export default MakeAd;
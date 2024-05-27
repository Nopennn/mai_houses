import React, {useState} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
// import imageToBase64 from "image-to-base64/browser";
import OfferListElement from "../components/OfferListElement";
import async from "async";

const MakeAd = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")

    const [address, setAddress] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("housing")

    const [about, setAbout] = useState("")
    const [pictures, setPictures] = useState({})
    const [base64Pictures, setBase64Pictures] = useState([])

    // const fileSelector = document.getElementById('file-selector');
    // fileSelector.addEventListener('change', (event) => {
    //
    // });

    // async function encodePictures(pictureList) {
    //     console.log(Array.from(pictureList))
    //     await Array.from(pictureList).forEach((picture) => {
    //         console.log(picture)
    //         imageToBase64(picture)
    //             .then(
    //                 (response) => {
    //                     base64Pictures.push(response)
    //                 }
    //             )
    //             .catch(
    //                 (error) => {
    //                     console.log(error);
    //                 }
    //             )
    //
    //     })
    //     console.log(base64Pictures)
    //     // base64Pictures.map((promise) => {
    //     //     promise.PromiseResult
    //     // })
    // }

    function encodeImageFileAsURL(element) {
        let file = element.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
            console.log('RESULT', reader.result)
            base64Pictures.push(reader.result)
        }
        reader.readAsDataURL(file);
    }
    const postAdData = (price, type, address, tags, about, photo_links) => {
        axios.post('https://mai-houses.onrender.com/houses/create', {
            token: Cookies.get("auth_token"),
            price: price,
            adress: address,
            type: type,
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
            <br/><br/>
            <h1>Создание объявления</h1>
            <br></br>
            <input type="radio" value={type} id="housing" name="type"
                   onChange={event => setType("person")}/>
            <label htmlFor="housing">Сдаю жилье      </label>
            <input type="radio" value={type} id="person" name="type"
                   onChange={event => setType("housing")}/>
            <label htmlFor="person">Ищу жилье</label>
            <br/>
            <br/>
            <input type="text" value={address} id="address" placeholder="Адрес"
                   onChange={event => setAddress(event.target.value)}/>
            <input type="number" value={price} id="price" placeholder="Цена"
                   onChange={event => setPrice(event.target.value)}/>
            <input type="text" value={about} id="about" placeholder="О жилье"
                   onChange={event => setAbout(event.target.value)}/>
            <br/>
            <label htmlFor="file-selector">Фотографии:</label>
            <input type="file" id="file-selector" multiple accept=".jpg, .jpeg, .png"
                   onChange={event => {
                       const fileList = event.target.files;
                       console.log(fileList);
                       setPictures(event.target.files)
                       encodeImageFileAsURL(event.target)

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
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
    const [tags, setTags] = useState([])

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
    const deleteAd = (id) => {
        axios.post(`https://mai-houses.onrender.com/houses/delete/${id}`, {
            token: Cookies.get("auth_token"),
            id: id,
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
            <p>
                <button
                    onClick={() => deleteAd(`6660cde9d75cc568d00ad41d`)}>
                    Удалить
                </button>
            </p>


            <h1>Ответ сервера: {serverResponse.message}</h1>
        </div>
    );
};

export default MakeAd;
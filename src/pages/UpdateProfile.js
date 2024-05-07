import React, {useState} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

const UpdateProfile = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [tags, setTags] = useState({})
    const [about, setAbout] = useState("")
    const [wanted, setWanted] = useState("")
    const [photo, setPhoto] = useState("")
    const postUserData = (email, phone, name, surname, age, gender, tags, about, wanted, photo) => {
        console.log(Cookies.get("auth_token")) // Токен есть
        axios.post('https://mai-houses.onrender.com/user/update', {
            token: Cookies.get("auth_token"),
            email: "abarovskiy02@mail.ru",
            phone: "79613027037",
            name: "Blah",
            surname: "Blah",
            age: 10,
            gender: "m",
            tags: [],
            about: "Blah",
            wanted: "Blah",
            photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbroadwayacademy.com.au%2F8-things-didnt-know-shrek-musical%2Fshrek-shocked%2F&psig=AOvVaw2cxChGMrvSLCLk-iAbNLxL&ust=1715161220524000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMj9nsyf-4UDFQAAAAAdAAAAABAE",
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
            Редактирование профиля
            <br></br>
            <input type="text" value={email} id="email" placeholder="Email"
                   onChange={event => setEmail(event.target.value)}/>
            <input type="tel" value={phone} id="phone" placeholder="Телефон"
                   onChange={event => setPhone(event.target.value)}/>
            <input type="text" value={name} id="name" placeholder="Имя"
                   onChange={event => setName(event.target.value)}/>
            <input type="text" value={surname} id="surname" placeholder="Фамилия"
                   onChange={event => setSurname(event.target.value)}/>
            <input type="text" value={age} id="age" placeholder="Возраст"
                   onChange={event => setAge(event.target.value)}/>
            <input type="text" value={gender} id="gender" placeholder="Пол"
                   onChange={event => setGender(event.target.value)}/>
            <input type="text" value={tags} id="tags" placeholder="Тэги"
                   onChange={event => setTags(event.target.value)}/>
            <input type="text" value={about} id="about" placeholder="О себе"
                   onChange={event => setAbout(event.target.value)}/>
            <input type="text" value={wanted} id="wanted" placeholder="Что ищу"
                   onChange={event => setWanted(event.target.value)}/>
            <input type="text" value={photo} id="photo" placeholder="Фото"
                   onChange={event => setPhoto(event.target.value)}/>
            <p>
                <button
                    onClick={() => postUserData(email, phone, name, surname, age, gender, tags, about, wanted, photo)}>
                    Разместить
                </button>
            </p>


            <h1>Ответ сервера: {serverResponse.message}</h1>
        </div>
    );
};

export default UpdateProfile;
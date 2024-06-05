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
    const [age, setAge] = useState(18)
    const [gender, setGender] = useState("")
    const [tags, setTags] = useState([])
    const [about, setAbout] = useState("")
    const [wanted, setWanted] = useState("")
    const [photo, setPhoto] = useState("")
    const postUserData = (email, phone, name, surname, age, gender, tags, about, wanted, photo) => {
        console.log(tags)
        console.log(Cookies.get("auth_token")) // Токен есть
        axios.post('https://mai-houses.onrender.com/user/update', {
            token: Cookies.get("auth_token"),
            login: "Nopen",
            password: "12323232",
            email: email,
            phone: phone,
            name: name,
            surname: surname,
            age: age,
            gender: gender,
            tags: tags,
            about: about,
            wanted: wanted,
            photo: photo
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
            <br></br>
            <input type="tel" value={phone} id="phone" placeholder="Телефон"
                   onChange={event => setPhone(event.target.value)}/>
            <br></br>
            <input type="text" value={name} id="name" placeholder="Имя"
                   onChange={event => setName(event.target.value)}/>
            <input type="text" value={surname} id="surname" placeholder="Фамилия"
                   onChange={event => setSurname(event.target.value)}/>
            <input type="number" value={age} id="age" placeholder="Возраст"
                   onChange={event => setAge(event.target.value)}/>
            <input type="text" value={gender} id="gender" placeholder="Пол"
                   onChange={event => setGender(event.target.value)}/>
            <br></br>
            Тэги через запятую
            <br></br>
            <input type="text" value={tags} id="tags" placeholder="МАИ,8 институт,IT,Тверь"
                   onChange={event => {
                       setTags(event.target.value.split(','));
                   }}/>
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
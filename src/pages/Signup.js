import React, {useState} from 'react';
import axios from "axios";

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        login: "",
        password: "",
        name: "",
        surname: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        about: "",
        wanted: "",
        tags: []
    })
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("Ваше имя")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [about, setAbout] = useState("")
    const [wanted, setWanted] = useState("")
    const postSignUpData = (login, password, name, surname, email, phone, age, gender, about, wanted) => {
        axios.post('http://localhost:3000/user/signup', {
            login: login,
            password: password,
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            age: age,
            gender: gender,
            about: about,
            wanted: wanted,
            tags: []
        })
            .then(function (response) {
                setUserInfo(response.data)
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            Регистрация

            <h1>Имя из ответа сервера: {userInfo.name}</h1>
            <input type="text" value={login} onChange={event => setLogin(event.target.value)}/>
            <input type="text" value={password} onChange={event => setPassword(event.target.value)}/>
            <h3>{name}</h3>
            <input type="text" value={name} onChange={event => setName(event.target.value)}/>
            <input type="text" value={surname} onChange={event => setSurname(event.target.value)}/>
            <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
            <input type="text" value={phone} onChange={event => setPhone(event.target.value)}/>
            <input type="text" value={age} onChange={event => setAge(event.target.value)}/>
            <input type="text" value={gender} onChange={event => setGender(event.target.value)}/>
            <input type="text" value={about} onChange={event => setAbout(event.target.value)}/>
            <input type="text" value={wanted} onChange={event => setWanted(event.target.value)}/>
            <button onClick={() => postSignUpData(login, password, name, surname, email, phone, age, gender, about, wanted)}>Зарегистрироваться!</button>
        </div>
    );
};

export default Signup;
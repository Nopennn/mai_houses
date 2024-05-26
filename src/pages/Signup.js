import React, {useState} from 'react';
import axios from "axios";
import '../App.css';
import Cookies from "js-cookie";
import imageToBase64 from 'image-to-base64/browser';

const Signup = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("none")
    const [surname, setSurname] = useState("none")
    const [photo, setPhoto] = useState("none")
    const [email, setEmail] = useState("none")
    const [phone, setPhone] = useState("none")
    const [age, setAge] = useState(18)
    const [gender, setGender] = useState("none")
    const [about, setAbout] = useState("none")
    const [lookingFor, setLookingFor] = useState("none")
    const [tags, setTags] = useState(["none"])
    const postSignUpData = (login, password, name, surname, photo, email, phone, age, gender, about, wanted, tags) => {
        axios.post('https://mai-houses.onrender.com/user/signup', {
            login: login,
            password: password,
            name: name,
            surname: surname,
            photo: photo,
            email: email,
            phone: phone,
            age: age,
            gender: gender,
            about: about,
            wanted: wanted,
            tags: tags
        })
        // axios.post('https://mai-houses.onrender.com/user/signup', {
        //     login: "MobUser",
        //     password: "0000",
        //     name: "none",
        //     surname: "none",
        //     photo: "none",
        //     email: "none",
        //     phone: "none",
        //     age: 18,
        //     gender: "none",
        //     about: "none",
        //     wanted: "none",
        //     tags: []
        // })
            .then(function (response) {
                setServerResponse(response.data)
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function SignUpForm() {
        if (true) {
            return (
                <div>
                    <label htmlFor="login">Логин</label>
                    <input type="text" value={login} id="login" onChange={event => setLogin(event.target.value)}/>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" value={password} id="password"
                           onChange={event => setPassword(event.target.value)}/>
                    {/*<button onClick={() => {*/}
                    {/*    setState(0)*/}
                    {/*    console.log(state)*/}
                    {/*}}>*/}
                    {/*    Далее*/}
                    {/*</button>*/}
                </div>
            )
        } else return (
            <div>
                {/*<h3>{name}</h3>*/}
                {/*<label htmlFor="name">Имя</label>*/}
                {/*<input type="text" value={name} id="name" onChange={event => setName(event.target.value)}/>*/}
                {/*<label htmlFor="surname">Фамилия</label>*/}
                {/*<input type="text" value={surname} id="surname" onChange={event => setSurname(event.target.value)}/>*/}
                {/*<label htmlFor="email">Email</label>*/}
                {/*<input type="email" value={email} id="email" onChange={event => setEmail(event.target.value)}/>*/}
                {/*<label htmlFor="phone">Телефон</label>*/}
                {/*<input type="tel" value={phone} id="phone" onChange={event => setPhone(event.target.value)}/>*/}
                {/*<label htmlFor="gender">Пол</label>*/}
                {/*<select name="select" value={gender} defaultValue={"М"} onChange={event => setGender(event.target.value)}>*/}
                {/*    <option value="М">М</option>*/}
                {/*    <option value="Ж">Ж</option>*/}
                {/*</select>*/}
                {/*<button onClick={() => setState(1)}>*/}
                {/*    Назад*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    onClick={() => postSignUpData(login, password, name, surname, email, phone, age, gender, about, wanted)}>*/}
                {/*    Зарегистрироваться!*/}
                {/*</button>*/}
            </div>
        )
    }

    return (
        <div className="signup">
            <p>
                Регистрация
            </p>

            {/*<label htmlFor="login">Логин</label>*/}
            <input type="text" value={login} id="login" placeholder="Логин" onChange={event => setLogin(event.target.value)}/>
            {/*<label htmlFor="password">Пароль</label>*/}
            <input type="password" value={password} id="password" placeholder="Пароль"
                   onChange={event => setPassword(event.target.value)}/>
            <p>
                <button
                    onClick={() => postSignUpData(login, password, name, surname, photo, email, phone, age, gender, about, lookingFor, tags)}>
                    Зарегистрироваться!
                </button>
            </p>


            {/*<h1>Ответ сервера: {serverResponse.message}</h1>*/}
        </div>
    );
};

export default Signup;
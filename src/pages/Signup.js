import React, {useState} from 'react';
import axios from "axios";

const Signup = () => {
    const [serverResponse, setServerResponse] = useState({})
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("none")
    const [phone, setPhone] = useState("none")
    const [age, setAge] = useState("none")
    const [gender, setGender] = useState("none")
    const [about, setAbout] = useState("none")
    const [wanted, setWanted] = useState("none")
    const postSignUpData = (login, password, name, surname, email, phone, age, gender, about, wanted) => {
        axios.post('https://mai-houses.onrender.com/user/signup', {
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
        <div>
            Регистрация
            <label htmlFor="login">Логин</label>
            <input type="text" value={login} id="login" onChange={event => setLogin(event.target.value)}/>
            <label htmlFor="password">Пароль</label>
            <input type="password" value={password} id="password"
                   onChange={event => setPassword(event.target.value)}/>
            <button
                onClick={() => postSignUpData(login, password, name, surname, email, phone, age, gender, about, wanted)}>
                Зарегистрироваться!
            </button>

            <h1>Ответ сервера: {serverResponse.message}</h1>
        </div>
    );
};

export default Signup;
import React, {useState} from 'react';
import axios from "axios";
import Cookies from "js-cookie";

const ModerationBlock = () => {
    const [moderationResult, setModerationResult] = useState({})
    const [approve, setApprove] = useState(1)
    const [comment, setComment] = useState("")
    const postModerationData = (approve, comment) => {
        let urlSplit = window.location.href.split('/');
        let offerId = urlSplit[urlSplit.length - 1]
        let moderationResult = approve ? "success" : "reject"
        console.log(moderationResult, offerId)
        axios.post(`https://mai-houses.onrender.com/houses/moderation_${moderationResult}/${offerId}`, {
            token: Cookies.get("auth_token"),
            id: offerId,
            comment_from_moderator: comment
        })
            .then(function (response) {
                setModerationResult(response.data)
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const approveBtnActive = {
        margin: "5px",
        color: "#ffffff",
        borderColor: "#118400",
        backgroundColor: "#118400",
        transition: "all .2s linear"
    };
    const approveBtnInactive = {
        margin: "5px",
        color: "#118400",
        borderColor: "#118400",
        backgroundColor: "#ffffff",
        transition: "all .2s linear"
    };
    const rejectBtnStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
    };

    return (
        <div className="moderation-block">
            <h3>Модерация</h3>
            <button
                className = "moderation-approve" onClick={() => setApprove(1)}
                style={{
                    backgroundColor: approve ? "#118400" : "#ffffff",
                    color: approve ? "#ffffff" : "#118400"
                }}>
                Принять
            </button>
            <button
                className = "moderation-reject" onClick={() => setApprove(0)}
                style={{
                    backgroundColor: !approve ? "#be0000" : "#ffffff",
                    color: !approve ? "#ffffff" : "#be0000"
                }}>
                Отклонить
            </button>
            <br/>
            <br/>
            Комментарий:
            <br/>
            <textarea name="comment" cols="40" rows="5" value={comment} onChange={event => setComment(event.target.value)}></textarea>
            <br/>
            <button
                onClick={() => postModerationData(approve, comment)}>
                Отправить
            </button>
        </div>
    );
};

export default ModerationBlock;
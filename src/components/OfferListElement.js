import React from 'react';
import {Link} from "react-router-dom";
import OfferPictures from "./OfferPictures";

function Images(props) {
    return (
        <img className="offer-image"
             src={props.links}
             alt={"pic"}
        />
    );
}
const OfferListElement = (props) => {
    return (
        <div className="offer">
            <h1>An offer!</h1>
            <div className="offer-info">
                <OfferPictures links={props.photo_links}/>
                <div className="offer-address">
                    <Link to={`/offers/${props.id}`} className="nav-link main-link">{props.address}</Link>
                </div>
                <div className="offer-price">
                    {props.price}
                </div>
            </div>

            <div className="user-info">
                <div className="user-name">
                    {props.name}
                </div>
            </div>
        </div>
    );
};

export default OfferListElement;
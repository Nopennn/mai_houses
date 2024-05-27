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
            <div className="offer-info">
                <h3>
                    <div className="offer-address">
                        <Link to={`/offers/${props.id}`} className="nav-link main-link">{props.address}</Link>
                    </div>
                </h3>

                <OfferPictures links={props.photo_links}/>

                <div className="offer-price">
                    <p>
                        {props.price} ₽
                    </p>
                </div>
            </div>

            <div className="user-info">
                <div className="user-name">
                    {props.about}
                </div>
            </div>
        </div>
    );
};

export default OfferListElement;
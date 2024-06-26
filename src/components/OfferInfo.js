import React from 'react';
import {Link} from "react-router-dom";

function Images(props) {
    return (
        <img className="offer-image"
             src={props.links}
             alt={"pic"}
        />
    );
}
const OfferInfo = (props) => {
    return (
        <div className="offer">
            <h1>An offer!</h1>
            <div className="offer-info">
                <Images links={props.photo_links}/>
                <div className="offer-address">
                    {props.address}
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

export default OfferInfo;
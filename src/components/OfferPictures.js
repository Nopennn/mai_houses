import React from 'react';
import {Link} from "react-router-dom";
import OfferListElement from "./OfferListElement";

const OfferPictures = (props) => {
    let side_pictures = props.links.slice(1)
    return (
        <div className="pictures-wrapper">
            <div className="main-picture">
                <img className="main-offer-image"
                     src={props.links[0]}
                     alt={"pic"}
                />
            </div>

            <div className="side-pictures">
                {side_pictures.map((picture, index) => (
                    <img className="side-offer-images"
                         src={props.links[0]}
                         alt={"pic"}
                         key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default OfferPictures;
import React from 'react';

function Images(props) {
    return (
        <img className="offer-image"
             src={props.links}
             alt={"pic"}
        />
    );
}
const Offer = (props) => {
    return (
        <div className="offer">
            <h1>An offer!</h1>
            <div className="offer-info">
                <Images links={props.photo_links}/>
                <div className="oofer-address">
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

export default Offer;
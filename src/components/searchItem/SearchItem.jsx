import React from "react";
import "./searchItem.css";

const SearchItem = ({ hotel }) => {
    return (
        <div className="searchItem">
            <img
                src={`/${hotel.image}`}
                alt={hotel.name}
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{hotel.name}</h1>
                <span className="siDistance">{hotel.distance}</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
          {hotel.description}
        </span>
                <span className="siFeatures">
          {hotel.details}
        </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>{hotel.rating}</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">${hotel.price}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;

/* eslint-disable react/prop-types */
import React from "react";
import "./OutsideSuggestions.css";

function OutsideSuggestionCard({ suggestion }) {
  const { name, city, url, image, outdoor, activity } = suggestion;

  return (
    <div className="eventCard">
      <h3 className="eventTitle">
        {activity} in {city}
      </h3>
      <img className="eventImg" src={image} alt="event-demonstration" />
      <p className="outOrIn">
        This is a <span className="bold">{outdoor}</span> event!
      </p>
      <a className="eventLink" href={url} target="_blank" rel="noreferrer">
        Click for more information...
      </a>
      <h6>Suggestion made by: {name}</h6>
      <hr />
    </div>
  );
}

export default OutsideSuggestionCard;

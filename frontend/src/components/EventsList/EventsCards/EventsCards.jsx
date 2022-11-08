/* eslint-disable react/prop-types */
import React from "react";
import "./EventsCards.css";

function EventsCards(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { title, description, image, url, outdoor, city } = props.event;
  return (
    <div>
      <div className="eventCard">
        <h2 className="eventTitle">{title}</h2>
        <img className="eventImg" src={image} alt={title} />
        <h4 className="eventDesc">
          {description} activity in {city}
        </h4>
        {outdoor ? (
          <p className="outOrIn">
            This is a <span className="bold">outdoor</span> event!
          </p>
        ) : (
          <p className="outOrIn">
            This is a <span className="bold">indoor</span> event!
          </p>
        )}
        <a href={url} target="_blank" className="eventLink" rel="noreferrer">
          Click for more information...
        </a>
      </div>
      <hr className="break" />
    </div>
  );
}

export default EventsCards;

/* eslint-disable react/prop-types */
import React from "react";

function EventsCards(props) {
  const { tittle, description, image, link, isOutdoor } = props;
  return (
    <div className="eventCard">
      <h3 className="eventTitle">{tittle}</h3>
      <img className="eventImg" src={image} alt={tittle} />
      <p className="eventDesc">{description}</p>
      {{ isOutdoor } ? (
        <p>
          This is a <div className="bold">outdoor</div> event!
        </p>
      ) : (
        <p>
          This is a <div className="bold">indoor</div> event!
        </p>
      )}
      <span className="eventLink">{link}</span>
    </div>
  );
}

export default EventsCards;

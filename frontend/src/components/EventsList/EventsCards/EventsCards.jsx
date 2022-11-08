/* eslint-disable react/prop-types */
import React from "react";

function EventsCards(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { title, description, image, url, outdoor } = props.event;
  return (
    <div className="eventCard">
      <h3 className="eventTitle">{title}</h3>
      <img className="eventImg" src={image} alt={title} />
      <p className="eventDesc">{description}</p>
      {outdoor ? (
        <p>
          This is a <div className="bold">outdoor</div> event!
        </p>
      ) : (
        <p>
          This is a <div className="bold">indoor</div> event!
        </p>
      )}
      <span className="eventLink">{url}</span>
    </div>
  );
}

export default EventsCards;

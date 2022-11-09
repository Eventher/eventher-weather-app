/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import EventContext from "../../../contexts/EventContext";
import "./EventsCards.css";

function EventsCards() {
  // eslint-disable-next-line react/destructuring-assignment

  const { events } = useContext(EventContext);

  return (
    <div>
      {events
        ? events.map((event) => (
            <div className="eventCard" key={event.id}>
              <h3 className="eventTitle">{event.title}</h3>
              <img className="eventImg" src={event.image} alt={event.title} />
              <p className="eventDesc">{event.description}</p>
              {event.outdoor ? (
                <p>
                  This is a <span className="bold">outdoor</span> event!
                </p>
              ) : (
                <p>
                  This is a <span className="bold">indoor</span> event!
                </p>
              )}
              <a href={event.url} className="eventLink" target="_black">
                Click for more information...
              </a>
            </div>
          ))
        : null}
    </div>
  );
}

export default EventsCards;

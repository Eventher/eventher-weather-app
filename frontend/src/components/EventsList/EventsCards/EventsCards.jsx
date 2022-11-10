/* eslint-disable react/prop-types */

import React, { useContext, useState } from "react";
import EventContext from "../../../contexts/EventContext";
import "./EventsCards.css";

function EventsCards() {
  // eslint-disable-next-line react/destructuring-assignment

  const { events } = useContext(EventContext);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [eventsPerPage, setEventsPerPage] = useState(10);

  /* Get current Posts */
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="everyCard">
      {events
        ? currentEvents.map((event) => (
            <div>
              <div className="eventCard" key={event.id}>
                <h3 className="eventTitle">{event.title}</h3>
                <img className="eventImg" src={event.image} alt={event.title} />
                <p className="eventDesc">
                  {event.description} activity in {event.city}
                </p>
                {event.outdoor ? (
                  <p>
                    This is a <span className="bold">outdoor</span> event!
                  </p>
                ) : (
                  <p>
                    This is a <span className="bold">indoor</span> event!
                  </p>
                )}
                <a
                  href={event.url}
                  target="_blank"
                  className="eventLink"
                  rel="noreferrer"
                >
                  Click for more information...
                </a>
              </div>
              <hr className="break" />
            </div>
          ))
        : null}
      <div>
        {currentPage !== 1 ? (
          <button className="leftBtn" type="button" onClick={previousPage}>
            {" "}
            &lt;{" "}
          </button>
        ) : null}
        {eventsPerPage * currentPage <= events.length ? (
          <button className="rightBtn" type="button" onClick={nextPage}>
            {" "}
            &gt;{" "}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default EventsCards;

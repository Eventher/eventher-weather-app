/* eslint-disable no-bitwise */
/* eslint-disable react/prop-types */

import React, { useContext, useState, useEffect } from "react";
import EventContext from "../../../contexts/EventContext";
import "./EventsCards.css";

function EventsCards() {
  // eslint-disable-next-line react/destructuring-assignment

  const { events } = useContext(EventContext);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [eventsPerPage, setEventsPerPage] = useState(12);
  const [showFilter, setShowFilter] = useState(false);
  const [isFilteredToOutdoor, setIsFilteredToOutdoor] = useState(false);
  const [isFilteredToIndoor, setIsFilteredToIndoor] = useState(false);

  /* Get current Posts */
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const [currentEvents, setCurrentEvents] = useState(
    events.slice(indexOfFirstEvent, indexOfLastEvent)
  );
  const isFiltered = isFilteredToIndoor || isFilteredToOutdoor;

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    setCurrentEvents(events.filter((event) => event.outdoor === 1));
  }, [isFilteredToOutdoor]);
  useEffect(() => {
    setCurrentEvents(events.filter((event) => event.outdoor === 0));
  }, [isFilteredToIndoor]);
  useEffect(() => {
    setCurrentEvents(events.slice(indexOfFirstEvent, indexOfLastEvent));
  }, [events, currentPage]);

  return (
    <div className="everyCard">
      <div>
        <h1 className="weather-title events-title">Events</h1>
        <p className="events-text">
          Here you can see a list of all the events we suggest for you
        </p>
      </div>
      <div className="filters">
        <button
          type="button"
          className="eventsFilter"
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          {" "}
        </button>
        {showFilter ? (
          <div>
            <button
              type="button"
              onClick={() => {
                setIsFilteredToOutdoor(false);
                setIsFilteredToIndoor(false);
                setCurrentEvents(
                  events.slice(indexOfFirstEvent, indexOfLastEvent)
                );
              }}
              className="filter"
            >
              All the Events
            </button>
            <button
              type="button"
              onClick={() => {
                setIsFilteredToOutdoor(!isFilteredToOutdoor);
                setCurrentPage(1);
              }}
              className="filter"
            >
              Outdoor Events
            </button>

            <button
              type="button"
              onClick={() => {
                setIsFilteredToIndoor(!isFilteredToIndoor);
                setCurrentPage(1);
              }}
              className="filter"
            >
              Indoor Events
            </button>
          </div>
        ) : null}
      </div>
      <div className="grid-container">
        {events
          ? currentEvents?.map((event) => (
              <div>
                <div className="eventCard" key={event.id}>
                  <h3 className="eventTitle">{event.title}</h3>
                  <img
                    className="eventImg"
                    src={event.image}
                    alt={event.title}
                  />
                  <p className="eventDesc">
                    {event.description} activity in {event.city}
                  </p>
                  {event.outdoor ? (
                    <p className="outOrIn">
                      This is a <span className="bold">outdoor</span> event!
                    </p>
                  ) : (
                    <p className="outOrIn">
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
        <div />
      </div>
      {!isFiltered & (currentPage !== 1) ? (
        <button className="leftBtn" type="button" onClick={previousPage}>
          {" "}
          &lt;{" "}
        </button>
      ) : null}
      {!isFiltered & (eventsPerPage * currentPage < events.length) ? (
        <button className="rightBtn" type="button" onClick={nextPage}>
          {" "}
          &gt;{" "}
        </button>
      ) : null}
    </div>
  );
}

export default EventsCards;

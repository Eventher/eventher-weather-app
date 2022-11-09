/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventsCards from "./EventsCards/EventsCards";
import EventContext from "../../contexts/EventContext";

function EventsList() {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    axios
      .get("http://localhost:5000/events")
      .then((response) => setEvents(response.data));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <EventContext.Provider value={{ events }}>
        {events ? events.map((event) => <EventsCards key={event.id} />) : null}
      </EventContext.Provider>
    </div>
  );
}

export default EventsList;

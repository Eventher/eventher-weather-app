/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventsCards from "./EventsCards/EventsCards";

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
      {events
        ? events.map((event) => <EventsCards key={event.id} event={event} />)
        : null}
    </div>
  );
}

export default EventsList;

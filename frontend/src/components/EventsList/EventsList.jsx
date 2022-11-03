/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventsCards from "./EventsCards/EventsCards";

function EventsList() {
  const [events, setEvents] = useState({});
  const fetchEvents = () => {
    axios.get("").then((response) => setEvents(response.data));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      {events.map(() => (
        <EventsCards />
      ))}
    </div>
  );
}

export default EventsList;

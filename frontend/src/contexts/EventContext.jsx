/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const EventContext = createContext();

export default EventContext;
// eslint-disable-next-line react/prop-types
export function EventContextProvider({ children }) {
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
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
}

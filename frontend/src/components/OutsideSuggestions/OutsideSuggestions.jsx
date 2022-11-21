/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OutsideSuggestionCard from "./OutsideSuggestionCard";
import "./OutsideSuggestions.css";

function OutsideSuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async () => {
    await axios
      .get("http://localhost:5000/suggestions")
      .then((response) => setSuggestions(response.data));
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <div className="outside-suggestions">
      <h1 className="outside-suggestions-title">
        Events suggested by other people / companies
      </h1>
      <p className="warning-text">
        Please be aware that this events haven't yet been verified. Therefore
        the information here displayed may be misleading. We will verify it's
        veracity as soon as possible and if the information is verified the
        event will show up along the other events{" "}
        <Link className="here-link" to="/events">
          here
        </Link>
        !
      </p>
      <div className="event-card-wrapper">
        {suggestions ? (
          suggestions.map((suggestion) => (
            <OutsideSuggestionCard
              key={suggestion.id}
              suggestion={suggestion}
            />
          ))
        ) : (
          <div>
            <h5>For now there are no user suggestions here...</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutsideSuggestions;

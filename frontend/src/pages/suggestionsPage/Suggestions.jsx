/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link } from "react-router-dom";
import Suggestions from "../../components/Suggestions/Suggestions";
import "./suggestions.css";

function SuggestionsPage() {
  return (
    <div className="suggestions-page">
      <Link className="outside-source" to="/outside-source">
        See other peoples suggestions here!
      </Link>
      <h1 className="suggestions-title">Make your event suggestion here!</h1>
      <Suggestions />
    </div>
  );
}

export default SuggestionsPage;

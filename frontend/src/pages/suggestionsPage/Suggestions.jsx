import React from "react";
import Suggestions from "../../components/Suggestions/Suggestions";
import "./suggestions.css";

function SuggestionsPage() {
  return (
    <div>
      <h1 className="suggestions-title">Make your event suggestion here!</h1>
      <Suggestions />
    </div>
  );
}

export default SuggestionsPage;

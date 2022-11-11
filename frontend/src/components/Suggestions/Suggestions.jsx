/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./suggestions.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Suggestions() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const saveSuggestion = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/suggestions", data)
      .then(() => {
        console.log("Post was sucessful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="suggestions-form" onSubmit={handleSubmit(saveSuggestion)}>
      <div className="suggestions-form-group">
        <label className="suggestions-label">Name:</label>
        <input
          className="suggestions-input"
          placeholder="Name"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.type === "required" && (
          <p className="alert" role="alert">
            Name is required
          </p>
        )}
      </div>
      <div className="suggestions-form-group">
        <label className="suggestions-label">Email:</label>
        <input
          className="suggestions-input"
          placeholder="E-mail"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail && (
          <p className="alert" role="alert">
            {errors.mail?.message}
          </p>
        )}
      </div>
      <div className="suggestions-form-group">
        <label className="suggestions-label">Activity:</label>
        <input
          className="suggestions-input"
          placeholder="Activity"
          {...register("activity", { required: "Activity is required" })}
          aria-invalid={errors.activity ? "true" : "false"}
        />
        {errors.activity && (
          <p className="alert" role="alert">
            {errors.activity?.message}
          </p>
        )}
      </div>
      <div className="suggestions-form-group">
        <label className="suggestions-label">
          Make a small description of the event, please
        </label>
        <input
          className="text-area"
          placeholder="Type here:"
          {...register("description", {
            required: "A description is required",
          })}
          aria-invalid={errors.description ? "true" : "false"}
        />
        {errors.description && (
          <p className="alert" role="alert">
            {errors.description?.message}
          </p>
        )}
      </div>
      <button className="suggestions-button" type="submit">
        Submit your suggestion
      </button>
    </form>
  );
}

export default Suggestions;

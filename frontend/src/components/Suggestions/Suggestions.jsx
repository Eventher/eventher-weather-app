/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState /* { useRef } */ } from "react";
import "./suggestions.css";
import { useForm } from "react-hook-form";
// import { GiCloudUpload } from "react-icons/gi";
import axios from "axios";

function Suggestions() {
  const cities = [
    "Aveiro",
    "Beja",
    "Braga",
    "Bragança",
    "Castelo Branco",
    "Coimbra",
    "Évora",
    "Faro",
    "Guarda",
    "Leiria",
    "Lisboa",
    "Portalegre",
    "Porto",
    "Santarém",
    "Setúbal",
    "Viana do Castelo",
    "Vila Real",
    "Viseu",
  ];

  const [selectedCity, setSelectedCity] = useState("");

  /* const wrapperRef = useRef(null);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  function imageUploaded() {
    const file = document.querySelector("input[type=file]").files[0];

    const reader = new FileReader();

    reader.onload = function () {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");

    };
    reader.readAsDataURL(file);
  } */

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const saveSuggestion = (data) => {
    console.log(data);
    // imageUploaded();
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
          placeholder="Name or company name"
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
          {...register("email", { required: "Email address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="alert" role="alert">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="suggestions-form-group">
        <label className="suggestions-label">City:</label>
        <select
          onChange={(event) => setSelectedCity(event.target.value)}
          className="suggestions-input select"
          id="city-select"
          {...register("city", { required: "City is required" })}
          aria-invalid={errors.city ? "true" : "false"}
        >
          <option value="">----------</option>
          {cities.map((city) => (
            <option className="options" value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="alert" role="alert">
            {errors.city?.message}
          </p>
        )}
      </div>
      <div className="suggestions-form-group">
        <label className="suggestions-label">URL:</label>
        <input
          className="suggestions-input"
          placeholder="URL for more information or to buy a ticket"
          {...register("url", { required: "URL is required" })}
          aria-invalid={errors.url ? "true" : "false"}
        />
        {errors.url && (
          <p className="alert" role="alert">
            {errors.url?.message}
          </p>
        )}
      </div>
      <div className="suggestions-form-group">
        <label className="suggestions-label">Image:</label>
        <input
          className="suggestions-input"
          placeholder="Image url"
          {...register("image", { required: "Image is required" })}
          aria-invalid={errors.image ? "true" : "false"}
        />
        {errors.image && (
          <p className="alert" role="alert">
            {errors.image?.message}
          </p>
        )}
      </div>
      {/* <div
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="suggestions-form-group drop-files-input"
      >
        <div>
          <GiCloudUpload className="drop-files-image" />
          <p className="drop-files-text">Drag and drop your image here</p>
        </div>
        <input
          id="file-input"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          name="image"
          {...register("image", { required: "Image is required" })}
          aria-invalid={errors.image ? "true" : "false"}
        />
      </div>
      {errors.image && (
        <p className="alert" role="alert">
          {errors.image?.message}
        </p>
      )} */}
      <div className="suggestions-form-group">
        <label className="suggestions-label">Outdoor or indoor:</label>
        <select
          className="suggestions-input select"
          id="city-select"
          {...register("outdoor", {
            required: "Outdoor/indoor status is required",
          })}
          aria-invalid={errors.outdoor ? "true" : "false"}
        >
          <option className="options" value="">
            ----------
          </option>
          <option className="options" value="outdoor">
            Outdoor
          </option>
          <option className="options" value="indoor">
            Indoor
          </option>
        </select>
        {errors.outdoor && (
          <p className="alert" role="alert">
            {errors.outdoor?.message}
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
        <textarea
          className="text-area"
          placeholder="Type here:"
          type="text"
          cols="30"
          rows="70"
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

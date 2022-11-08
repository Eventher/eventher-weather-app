/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./suggestions.css";
// import { Suggestions } from '@components/suggestions/suggestions';
import { useForm } from "react-hook-form";

function Suggestions() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // eslint-disable-next-line no-restricted-syntax
  const onSubmit = (data) => console.log(data);

  return (
    <form className="suggestions-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input
        placeholder="Name"
        {...register("name", { required: true })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name?.type === "required" && (
        <p role="alert"> Name is required</p>
      )}
      <label>Email:</label>
      <input
        placeholder="E-mail"
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      <label>Activity:</label>
      <input
        placeholder="activity"
        {...register("activity", { required: "Activity is required" })}
        aria-invalid={errors.activity ? "true" : "false"}
      />

      {errors.activity && <p role="alert">{errors.activity?.message}</p>}

      <label>Submit</label>
      <input
        placeholder="Type here:"
        className="textArea"
        {...register("textArea", { required: "textArea is required" })}
        aria-invalid={errors.textArea ? "true" : "false"}
      />

      {errors.textArea && <p role="alert">{errors.textArea?.message}</p>}

      <button type="submit">Submit your suggestion</button>
    </form>
  );
}

export default Suggestions;

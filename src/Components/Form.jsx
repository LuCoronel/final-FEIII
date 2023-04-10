import React from "react";
import { useState } from "react";
import style from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);

  const regexEmail = /^\S+@\S+\.\S+$/;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = name.length <= 5 || !regexEmail.test(email);
    setErrorVisible(hasError);
    setMessageSuccess(!hasError);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <input placeholder="Name and Surname" onChange={handleName} />
        <input placeholder="Email" onChange={handleEmail} />
        <button type="submit"> Submit </button>
      </form>
      {errorVisible && (
        <div className={style.errorMessage}>
          Please check again the information submited
        </div>
      )}
      {messageSuccess && (
        <div>
          Thank you {name}! we will be contacting you by email right away.
        </div>
      )}
    </div>
  );
};

export default Form;

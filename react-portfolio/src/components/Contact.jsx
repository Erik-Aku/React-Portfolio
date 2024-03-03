import { useState } from "react";
import { validateEmail } from "../utils/helpers.js";

function Contact() {
    // setting up variables for form state
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;
  
    const handleChange = (e) => {
      if (e.target.name === "email") {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage("Your email address is invalid.");
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage("");
          }
        }
      }
  
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    };
  
    function handleBlank(e) {
      if (e.target.name === "Name" || e.target.name === "Message") {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
  
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!errorMessage) {
          setErrorMessage("");
      }
  
      setFormState("");
    };
  
    return (
      <div>
        <h1 className="contact">Contact</h1>
        <div className="form">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                defaultValue={name}
                onBlur={handleBlank}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="message">
                Message:
              </label>
              <textarea
                className="textarea"
                name="message"
                id="message"
                defaultValue={message}
                onBlur={handleBlank}
              />
            </div>
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  // export Contact Component
  export default Contact;
  
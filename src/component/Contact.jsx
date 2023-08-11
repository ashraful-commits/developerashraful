import React, { useRef, useState } from "react";
import { Toastify } from "../Helper/Toastify";
import { useCreateMessageMutation } from "../app/api/ApiSlice";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [createMessage] = useCreateMessageMutation();

  const form = useRef();
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      return Toastify("Name field required!", "error");
    }
    if (!input.email) {
      return Toastify("Email field required!", "error");
    }
    if (!input.subject) {
      return Toastify("Subject field required!", "error");
    }
    if (!input.message) {
      return Toastify("Subject field required!", "error");
    }
    if (!input.name || !input.email || !input.subject || !input.message) {
      return Toastify("All fields are required!", "error");
    } else {
      createMessage(input);
      emailjs
        .sendForm(
          "service_bk53txh",
          "template_uf5fiaf",
          form.current,
          "BnsmL_qV4-rKJWsjb"
        )
        .then(
          (result) => {
            console.log(result.text);
            Toastify("You are connected!", "success");
          },
          (error) => {
            console.log(error.text);
            Toastify(error.text, "error");
          }
        );
    }
  };
  return (
    <>
      {" "}
      {/* <!-- Contact Start --> */}
      <div className="container-fluid py-5" id="contact">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ webkitTextStroke: "1px #dee2e6" }}
            >
              Contact
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Contact Me
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form text-center">
                <div id="success"></div>
                <form
                  ref={form}
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                  onSubmit={handleSubmit}
                >
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      <input
                        onChange={handleInput}
                        type="text"
                        className="form-control p-4"
                        value={input.name}
                        name="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group col-sm-6">
                      <input
                        onChange={handleInput}
                        type="email"
                        className="form-control p-4"
                        value={input.email}
                        name="email"
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      onChange={handleInput}
                      type="text"
                      className="form-control p-4"
                      value={input.subject}
                      name="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      onChange={handleInput}
                      className="form-control py-3 px-4"
                      rows="5"
                      value={input.message}
                      name="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-primary"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default Contact;

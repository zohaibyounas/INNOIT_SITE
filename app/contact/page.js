"use client";
import axios from "axios";
import React, { useState } from "react";
//import route from "../api/email/route";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      const response = await axios.post("/api/email", formData);
      const data = response.data;
      console.log(data);
      // const response = await fetch("/api/email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // const data = await response.json(); // Read the response from the server

      // if (response.ok) {
      // alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      // } else {
      // alert(`Error sending message: ${data.message || "Unknown error"}`);
      // }
    } catch (error) {
      console.error("Error occurred during fetch:", error);
      alert("There was an error sending the message. Please try again.");
    }
  };

  return (
    <>
      <section
        // className=""
        style={{
          backgroundImage: "url(images/hosting-pricing-bg.jpg)",
          height: "1rem",
        }}
      ></section>
      <section>
        <div className="container">
          <div className="row">
            <div
              className="col-12 tab-style-04"
              data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <ul className="nav nav-tabs border-0 justify-content-center mb-6 fs-18 fw-500">
                <li className="nav-item">
                  <a
                    className="nav-link text-dark-gray text-black"
                    data-bs-toggle="tab"
                    href="#tab_five2"
                  >
                    Islamabad
                    <span className="tab-border bg-dark-gray" />
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                {/* start tab content */}
                <div className="tab-pane fade in active show" id="tab_five1">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-6 sm-mb-30px">
                      <img
                        src="https://www.unitedsol.net/wp-content/uploads/2023/02/ezgif.com-gif-maker.jpg"
                        alt=""
                        className="w-100 border-radius-6px"
                      />
                    </div>
                    <div className="col-lg-4 col-md-5 offset-md-1 text-center text-md-start">
                      <span className="text-dark-gray fs-18 fw-600 ls-minus-05px">
                        Third Floor, Amjad plaza
                      </span>
                      <p className="text-black">
                        plaza, Bank Rd, Saddar
                        <br />
                        Rawalpindi, Punjab 46000
                      </p>

                      <span className="d-block mb-30px">
                        <span className="text-dark-gray fw-600">Email:</span>{" "}
                        <a
                          className="text-black"
                          href="mailto:info@yourdomain.com"
                        >
                          Info@innoit.org{" "}
                        </a>
                      </span>
                      <a
                        href=" https://g.co/kgs/YjHcn1U "
                        target="_blank"
                        className="btn btn-medium btn-dark-gray btn-rounded btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Get directions"
                          >
                            Get directions
                          </span>
                          <span>
                            <i className="feather icon-feather-arrow-right" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade in" id="tab_five3">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-6 sm-mb-30px">
                      <img
                        src="https://via.placeholder.com/457x350"
                        alt=""
                        className="w-100 border-radius-6px"
                      />
                    </div>
                  </div>
                </div>
                {/* end tab content */}
                {/* start tab content */}
                <div className="tab-pane fade in" id="tab_five4">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-6 sm-mb-30px">
                      <img
                        src="https://via.placeholder.com/457x350"
                        alt=""
                        className="w-100 border-radius-6px"
                      />
                    </div>
                    <div className="col-lg-4 col-md-5 offset-md-1 text-center text-md-start">
                      <span className="text-dark-gray fs-18 fw-600 ls-minus-05px">
                        Crafto - Switzerland
                      </span>
                      <p>
                        701 sondanella, 24th Floor,
                        <br />
                        Günsberg, Switzerland
                      </p>
                      <span className="d-block">
                        <span className="text-dark-gray fw-600">T:</span>
                        <a href="tel:1234567890"> 123 456 7890</a>
                      </span>
                      <span className="d-block mb-30px">
                        <span className="text-dark-gray fw-600">Email:</span>{" "}
                        <a href="mailto:info@yourdomain.com">
                          info@yourdomain.com
                        </a>
                      </span>
                      <a
                        href="https://www.google.com/maps?ll=-37.805688,144.962312&z=17&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449"
                        target="_blank"
                        className="btn btn-medium btn-dark-gray btn-rounded btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Get directions"
                          >
                            Get directions
                          </span>
                          <span>
                            <i className="feather icon-feather-arrow-right" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* end tab content */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="p-0">
        <div className="container">
          <div className="row justify-content-center">
            <h4 className="text-center text-black">Get in touch with us</h4>
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Privacy Text */}
                  <div className="mb-3 text-black">
                    <p className="text-sm">
                      We are committed to protecting your privacy. We will never
                      collect information about you without your explicit
                      consent.
                    </p>
                  </div>
                </form>
              </div>

              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  {/* Message Textarea */}
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-black">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  {/* Send Message Button */}
                  <div className="mb-3 text-end">
                    <button
                      type="submit"
                      className="btn btn-medium btn-dark-gray btn-rounded btn-switch-text btn-box-shadow p-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end section */}
      {/* start section */}
      <section className="half-section">
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            data-anime='{ "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <div className="col-md-10 text-center">
              <h6 className="text-dark-gray fw-500 mb-0 ls-minus-1px">
                How can we help you today? Send a message at{" "}
                <a
                  href="mailto:info@domain.com"
                  className="text-decoration-line-bottom text-dark-gray fw-700 text-black"
                >
                  info@innoit.org
                </a>
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
    </>
  );
};

export default Contact;

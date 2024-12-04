import React from "react";
import { FaCheck, FaTools, FaGraduationCap, FaHandshake } from "react-icons/fa";
import {
  FaRegBuilding,
  FaEnvelope,
  FaWhatsapp,
  FaMobileAlt,
  FaShoppingCart,
  FaUserShield,
  FaAdn,
  FaFileMedicalAlt,
  FaCreditCard,
  FaBookOpen,
  FaUserAlt,
} from "react-icons/fa";
const About = () => {
  return (
    <>
      <>
        {/* start page title */}
        <section
          className="page-title-big-typography bg-dark-gray ipad-top-space-margin cover-background md-py-0 overflow-x-hidden overflow-hidden"
          style={{ backgroundImage: "url(/images/demo-hosting-about-bg.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center small-screen">
              <div className="col-lg-5 col-sm-7 position-relative page-title-extra-small">
                <h1 className="mb-15px text-white opacity-7 fw-300 overflow-hidden">
                  <span
                    className="d-inline-block"
                    data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300 }'
                  ></span>
                </h1>
                <h2 className="m-auto pb-5px pt-5px text-white fw-600 ls-minus-1px overflow-hidden">
                  <span
                    className="d-inline-block"
                    data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300, "delay": 200 }'
                  >
                    Welcome to Innoit Pvt Ltd
                  </span>
                </h2>
                <p className="text-white">
                  our trusted partner for SAP Business One consulting and
                  training! We specialize in empowering businesses with the
                  tools, knowledge, and expertise to maximize the potential of
                  SAP Business One, the leading ERP solution for small to
                  mid-sized enterprises.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* start section */}
        <section className="pb-0">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-lg-6 col-md-10 md-mb-50px animation-float"
                data-anime='{ "effect": "slide", "color": "#ffffff", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
              >
                <img
                  className="w-100"
                  src="/images/demo-hosting-hosting-01.jpg"
                  alt=""
                />
              </div>
              <div
                className="col-xl-5 offset-xl-1 col-lg-6"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <span className="text-base-color fw-600 mb-15px text-uppercase d-block">
                  {/* Simple and intuitive */}
                </span>
                <h2 className="fw-700 text-dark-gray ls-minus-1px">
                  Our Mission
                </h2>
                <p className="w-95 lg-w-100 mb-30px text-black">
                  At Innoit Pvt Ltd, our mission is simple: to help businesses
                  streamline operations, optimize processes, and drive growth
                  through the effective implementation of SAP Business One.
                  Whether you are a growing company looking to implement SAP B1
                  or an individual seeking to become a certified consultant, we
                  are here to guide you every step of the way.
                </p>
              </div>
              <div className="mx-auto w-11/12 lg:w-8/12 py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                  {/* What We Do Section */}
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mt-6">
                    <h3 className="text-2xl font-semibold text-black mb-4 text-center lg:text-left">
                      Who We Are
                    </h3>
                    <p className="text-base leading-relaxed text-black">
                      Innoit Pvt Ltd is a team of seasoned SAP Business One
                      experts with years of hands-on experience in ERP
                      consulting, implementation, customization, and training.
                      Our consultants are dedicated to delivering tailored
                      solutions that meet the unique needs of your business.
                      From initial setup to advanced customizations, we focus on
                      providing comprehensive SAP B1 solutions that drive
                      efficiency and growth.
                    </p>
                  </div>
                  <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg mt-12">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center ">
                      What We Do
                    </h3>
                    <p className="text-base leading-relaxed text-black text-center">
                      We provide a full range of SAP Business One services,
                      including
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                      <li className="text-black">
                        <strong className="text-black">Consulting:</strong> We
                        assess your business needs, recommend the best SAP B1
                        modules, and customize them to fit your unique
                        processes.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Implementation:</strong>{" "}
                        Our experts ensure a seamless implementation of SAP
                        Business One, minimizing downtime and maximizing value.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          Customization & Support:
                        </strong>{" "}
                        We offer ongoing support, customizations, and upgrades
                        to adapt SAP B1 to your evolving business requirements.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Training:</strong> Our
                        professional training programs are designed to equip
                        individuals and teams with in-depth knowledge of SAP
                        Business One, covering everything from basic
                        functionalities to advanced modules.
                      </li>
                    </ul>
                  </div>

                  {/* Who We Are Section */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-50 overflow-hidden overscroll-x-none ">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-black">
              Why Choose <span className="text-red-500">Us</span>
            </h2>
          </div>

          <div
            className="row justify-content-center"
            data-anime='{ "el": "childs", "perspective": [1200, 1200], "translateY": [0, 0], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0, 1], "duration": 900, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col-lg-4 mx-2  col-md-9 icon-with-text-style-02 transition-inner-all mb-30px px-24">
              <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                <div className="feature-box-icon">
                  <FaCheck className="text-base-color text-3xl" size={25} />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                    Expertise You Can Trust
                  </span>
                  <p className="text-black">
                    Our consultants have extensive experience in SAP Business
                    One across various industries, ensuring that we understand
                    your business needs.
                  </p>
                </div>
                <div className="feature-box-overlay bg-base-color" />
              </div>
            </div>

            <div className="col-lg-4 mx-2  col-md-9 icon-with-text-style-02 transition-inner-all mb-30px">
              <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                <div className="feature-box-icon">
                  <FaTools className="text-base-color text-3xl" size={25} />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                    Customized Solutions
                  </span>
                  <p className="text-black">
                    We believe in a personalized approach—each solution we
                    design is tailored to meet your specific requirements.{" "}
                  </p>
                </div>
                <div className="feature-box-overlay bg-base-color" />
              </div>
            </div>

            <div className="col-lg-4 mx-2  col-md-9 icon-with-text-style-02 transition-inner-all mb-30px">
              <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                <div className="feature-box-icon">
                  <FaRegBuilding
                    className="text-base-color text-3xl"
                    size={25}
                  />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                    Comprehensive Training
                  </span>
                  <p className="text-black">
                    Our training courses are crafted by industry professionals,
                    designed to provide you with the skills needed to become a
                    certified SAP B1 expert.
                  </p>
                </div>
                <div className="feature-box-overlay bg-base-color" />
              </div>
            </div>

            <div className="col-lg-4 mx-2  col-md-9 icon-with-text-style-02 transition-inner-all mb-30px">
              <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                <div className="feature-box-icon">
                  <FaEnvelope className="text-base-color text-3xl" size={25} />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                    Client-Focused Approach
                  </span>
                  <p className="text-black">
                    We prioritize building long-lasting relationships with our
                    clients through reliable support, open communication, and a
                    commitment to your success.
                  </p>
                </div>
                <div className="feature-box-overlay bg-base-color" />
              </div>
            </div>
          </div>
        </section>

        <section
          className="cover-background "
          style={{
            backgroundImage: 'url("/images/demo-hosting-about-02.jpg")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center ">
              <div
                className="col-xl-8 col-lg-10 text-center"
                data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <div className="d-inline-block mb-45px sm-mb-25px">
                  <a
                    href="https://www.youtube.com/watch?v=CHe6LLvkDnY"
                    className="position-relative bg-white d-inline-block text-center rounded-circle video-icon-box video-icon-large popup-youtube"
                  >
                    <span>
                      <span className="video-icon">
                        <i className="fa-solid fa-play text-base-color" />
                        <span className="video-icon-sonar">
                          <span className="video-icon-sonar-bfr bg-white" />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <h2 className="text-white fw-700 ls-minus-1px mb-0">
                  Join Us in Transforming Business Together
                </h2>
                <span className="d-block text-white opacity-5 text-uppercase mt-20px">
                  At Innoit Pvt Ltd, we are passionate about helping businesses
                  transform, streamline, and succeed. Whether you’re an
                  organization in need of ERP solutions or an individual aiming
                  to build a rewarding career in SAP Business One, Innoit Pvt
                  Ltd is here to provide the expertise and guidance you need.
                  Explore our services, get in touch with our expert team, or
                  join our training programs today. Let’s build a better, more
                  efficient future together with SAP Business One!
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}

        {/* end section */}
        {/* start section */}

        {/* end section */}
      </>
    </>
  );
};

export default About;

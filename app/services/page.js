import React from "react";
import {
  FaCheck,
  FaTools,
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

const Services = () => {
  return (
    <>
      <>
        {/* start page title */}
        <section
          className="page-title-big-typography bg-dark-gray ipad-top-space-margin cover-background md-py-0"
          style={{
            backgroundImage: "url(/images/demo-hosting-hosting-bg.jpg)",
          }}
        >
          <div className="container">
            <div className="row align-items-center small-screen">
              <div className="col-10 col-xl-5 col-lg-6 col-sm-7 position-relative page-title-extra-small">
                <h1 className="mb-15px text-white opacity-7 fw-300 overflow-hidden">
                  {/* <span
                    className="d-inline-block"
                    data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300 }'
                  >
                    Recommended hosting options
                  </span> */}
                </h1>
                <h2 className="m-auto pb-5px pt-5px text-white fw-600 ls-minus-1px overflow-hidden">
                  <span
                    className="d-inline-block"
                    data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300, "delay": 300 }'
                  >
                    Comprehensive SLA Support
                  </span>
                </h2>
                <p className="text-white">
                  Reliable and efficient Service Level Agreements for SAP
                  Business One user companies, ensuring smooth operations and
                  minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* start section */}
        <section
          className="cover-background"
          style={{ backgroundImage: 'url("/images/demo-hosting-home-06.jpg")' }}
        >
          <div className="container">
            <div className="row justify-content-center mb-3">
              <div
                className="col-lg-6 text-center"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h2 className="text-dark-gray fw-700 ls-minus-1px">
                  Custom Add-On Development
                </h2>
                <p className="text-black">
                  Expand the capabilities of SAP Business One with our tailored
                  third-party add-ons, including.
                </p>
              </div>
            </div>
            <div
              className="row justify-content-center"
              data-anime='{ "el": "childs", "perspective": [1200, 1200], "translateY": [0, 0], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0, 1], "duration": 900, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all mb-30px">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaCheck className="text-base-color text-3xl" size={25} />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      CRM Solutions:
                    </span>
                    <p className="text-black">
                      Enhance customer relationship management.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>

              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all mb-30px">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaTools className="text-base-color text-3xl" size={25} />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      Payroll Systems:
                    </span>
                    <p className="text-black">
                      Streamline payroll processing and management.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>

              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all mb-30px">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaRegBuilding
                      className="text-base-color text-3xl"
                      size={25}
                    />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      Point of Sales (POS):
                    </span>
                    <p className="text-black">
                      Integrate seamless sales solutions.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>

              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all mb-30px">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaEnvelope
                      className="text-base-color text-3xl"
                      size={25}
                    />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      Weight Bridge Integration:
                    </span>
                    <p className="text-black">
                      Optimize logistics with automated weight tracking.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>

              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all md-mb-30px">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaFileMedicalAlt
                      className="text-base-color text-3xl"
                      size={25}
                    />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      Email Caster:
                    </span>
                    <p className="text-black">
                      Simplify bulk email communication.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>

              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaWhatsapp
                      className="text-base-color text-3xl"
                      size={25}
                    />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      WhatsApp Integration:
                    </span>
                    <p className="text-black">
                      Boost communication with integrated WhatsApp solutions.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>
              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all mt-3">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaCreditCard
                      className="text-base-color text-3xl"
                      size={25}
                    />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      Payment Add-On:
                    </span>
                    <p className="text-black">
                      Facilitate secure and efficient payment processing within
                      SAP Business One.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>
              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all mt-3">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaBookOpen
                      className="text-base-color text-3xl"
                      size={25}
                    />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      Learning Management System (LMS):
                    </span>
                    <p className="text-black">
                      Deliver and manage online training and e-learning courses.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>
              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all mt-3">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaUserAlt className="text-base-color text-3xl" size={25} />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      Employee Self-Service Mobile App:
                    </span>
                    <p className="text-black">
                      Empower employees to manage their own information and
                      requests.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>
              <div className="col-lg-6 col-md-9 icon-with-text-style-02 transition-inner-all mt-3">
                <div className="feature-box feature-box-left-icon-middle text-start hover-box dark-hover box-shadow-extra-large box-shadow-extra-large-hover bg-white h-100 border-radius-4px p-9 overflow-hidden last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <FaShoppingCart
                      className="text-base-color text-3xl"
                      size={25}
                    />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 mb-5px fs-18 ls-minus-05px">
                      Sales Order Mobile App:
                    </span>
                    <p className="text-black">
                      Streamline the sales process with an easy-to-use mobile
                      application for order management.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-base-color" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        {/* <section
          className="bg-midnight-dark-blue cover-background"
          style={{ backgroundImage: 'url("images/demo-hosting-home-02.png")' }}
          data-0-top="background-color:rgb(25,30,61);"
          data-center-bottom="background-color:rgb(17,20,38);"
        >
          <div className="container">
            <div className="row justify-content-center mb-3">
              <div
                className="col-lg-8 text-center"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <span className="text-white opacity-5 mb-5px text-uppercase d-block">
                  What we offers
                </span>
                <h2 className="text-white fw-700 ls-minus-1px">
                  Affordable services
                </h2>
              </div>
            </div>
            <div
              className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center ps-8 pe-8 lg-px-0"
              data-anime='{ "el": "childs", "translateY": [30, 0], "scale":[0.8,1], "opacity": [0,1], "duration": 500, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
        
              <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
                <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                  <div className="feature-box-icon">
                    <i className="line-icon-URL-Window icon-extra-large text-white mb-15px" />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-white fw-500 lh-24">
                      Domain name
                      <br />
                      generator
                    </span>
                  </div>
                  <div className="feature-box-overlay bg-white" />
                </div>
              </div>
           
              <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
                <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                  <div className="feature-box-icon">
                    <i className="line-icon-Cloud-Email icon-extra-large text-white mb-15px" />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-white fw-500 lh-24">
                      SQL server
                      <br />
                      hosting
                    </span>
                  </div>
                  <div className="feature-box-overlay bg-white" />
                </div>
              </div>
      
              <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
                <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                  <div className="feature-box-icon">
                    <i className="line-icon-Network-Window icon-extra-large text-white mb-15px" />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-white fw-500 lh-24">
                      Cheap web
                      <br />
                      hosting
                    </span>
                  </div>
                  <div className="feature-box-overlay bg-white" />
                </div>
              </div>
         
              <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
                <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                  <div className="feature-box-icon">
                    <i className="line-icon-Envelope icon-extra-large text-white mb-15px" />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-white fw-500 lh-24">
                      Website email
                      <br />
                      hosting
                    </span>
                  </div>
                  <div className="feature-box-overlay bg-white" />
                </div>
              </div>
          
              <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
                <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                  <div className="feature-box-icon">
                    <i className="line-icon-Wordpress icon-extra-large text-white mb-15px" />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-white fw-500 lh-24">
                      WordPress
                      <br />
                      installation
                    </span>
                  </div>
                  <div className="feature-box-overlay bg-white" />
                </div>
              </div>
          
              <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
                <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                  <div className="feature-box-icon">
                    <i className="line-icon-Big-Data icon-extra-large text-white mb-15px" />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-white fw-500 lh-24">
                      Game server
                      <br />
                      hosting
                    </span>
                  </div>
                  <div className="feature-box-overlay bg-white" />
                </div>
              </div>
      
              <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
                <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-15 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                  <div className="feature-box-icon">
                    <i className="line-icon-Data-Password icon-extra-large text-white mb-15px" />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-white fw-500 lh-24">
                      VPS server
                      <br />
                      hosting
                    </span>
                  </div>
                  <div className="feature-box-overlay bg-white" />
                </div>
              </div>
          
              <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
                <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                  <div className="feature-box-icon">
                    <i className="line-icon-Globe icon-extra-large text-white mb-15px" />
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-white fw-500 lh-24">
                      Free website
                      <br />
                      hosting
                    </span>
                  </div>
                  <div className="feature-box-overlay bg-white" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* end section */}
        {/* start section */}
        {/* <section>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 position-relative md-mb-25px"
                data-anime='{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
              >
                <h2 className="fw-700 text-dark-gray ls-minus-2px">
                  Expert Online Training
                </h2>
                <p>
                  Empowering professionals with in-depth, flexible online
                  training for SAP Business One, covering all essential modules
                  and advanced functionalities.
                </p>
                <div>
                  <span className="text-dark-gray fs-30 me-5px align-middle fancy-text-style-4 ls-minus-1px">
                    👋 Say{" "}
                    <span
                      className="fw-600"
                      data-fancy-text='{ "effect": "rotate", "string": ["hello!", "hallå!", "salve!"] }'
                    />
                  </span>
                </div>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <div
                  className="accordion accordion-style-02"
                  id="accordion-style-02"
                  data-active-icon="icon-feather-chevron-up"
                  data-inactive-icon="icon-feather-chevron-down"
                  data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                >
                  <div className="accordion-item active-accordion">
                    <div className="accordion-header border-bottom border-color-extra-medium-gray">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-style-02-01"
                        aria-expanded="true"
                        data-bs-parent="#accordion-style-02"
                      >
                        <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                          <i className="feather icon-feather-chevron-up icon-extra-medium" />
                          <span className="fw-600 fs-18">
                            How long is this site live?
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      id="accordion-style-02-01"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordion-style-02"
                    >
                      <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                        <p>
                          Determining how long a website has been live can
                          provide insights into its age, trustworthiness, and
                          growth trajectory. This information is especially
                          useful for understanding domain authority, user base,
                          and online presence.
                        </p>
                      </div>
                    </div>
                  </div>
                
                  <div className="accordion-item">
                    <div className="accordion-header border-bottom border-color-extra-medium-gray">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-style-02-02"
                        aria-expanded="false"
                        data-bs-parent="#accordion-style-02"
                      >
                        <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                          <i className="feather icon-feather-chevron-down icon-extra-medium" />
                          <span className="fw-600 fs-18">
                            Introduction to SAP Business
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      id="accordion-style-02-02"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion-style-02"
                    >
                      <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                        <p>
                          SAP Business provides scalable, integrated solutions
                          tailored for businesses of all sizes, helping
                          organizations manage their operations more
                          effectively. From small startups to large enterprises,
                          SAP offers tools that streamline financial management,
                          supply chain processes, customer relationship
                          management (CRM), and human resources (HR).
                        </p>
                      </div>
                    </div>
                  </div>
                
                  <div className="accordion-item">
                    <div className="accordion-header border-bottom border-color-light-medium-gray">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-style-02-03"
                        aria-expanded="false"
                        data-bs-parent="#accordion-style-02"
                      >
                        <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                          <i className="feather icon-feather-chevron-down icon-extra-medium" />
                          <span className="fw-600 fs-18">
                            Seamless Website Migration
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      id="accordion-style-02-03"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion-style-02"
                    >
                      <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                        <p>
                          Migrating to a new site doesn't have to be
                          complicated. Whether you're transitioning your
                          business to a more advanced platform or consolidating
                          operations, our migration solutions ensure a smooth
                          and secure transfer of data, functionality, and
                          design.
                        </p>
                      </div>
                    </div>
                  </div>
               
                  <div className="accordion-item">
                    <div className="accordion-header border-bottom border-color-transparent">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-style-02-04"
                        aria-expanded="false"
                        data-bs-parent="#accordion-style-02"
                      >
                        <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                          <i className="feather icon-feather-chevron-down icon-extra-medium" />
                          <span className="fw-600 fs-18">
                            What to Keep in Mind
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      id="accordion-style-02-04"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion-style-02"
                    >
                      <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent">
                        <p>
                          SSL Certificate: Ensure your new domain has an active
                          SSL certificate for secure browsing. Email Migration:
                          Update email settings if your domain is used for
                          business emails. Brand Consistency: Ensure your
                          branding remains consistent across the new domain.
                        </p>
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div
                className="col-auto icon-with-text-style-08 sm-mb-10px"
                data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon me-10px">
                    <i className="bi bi-envelope icon-small text-dark-gray" />
                  </div>
                  <div className="feature-box-content">
                    <span className="alt-font text-dark-gray fw-500 fs-18">
                      Looking for help?{" "}
                      <a
                        href="#"
                        className="text-decoration-line-bottom text-base-color fw-600"
                      >
                        Submit a ticket
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-auto icon-with-text-style-08"
                data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon me-10px">
                    <i className="bi bi-chat-dots icon-small text-dark-gray" />
                  </div>
                  <div className="feature-box-content">
                    <span className="alt-font text-dark-gray fw-500 fs-18">
                      Keep in Touch.{" "}
                      <a
                        href="#"
                        className="text-decoration-line-bottom text-base-color fw-600"
                      >
                        Like us on Facebook
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* end section */}
      </>
    </>
  );
};

export default Services;

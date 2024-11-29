const Contact = () => {
  return (
    <>
      {/* start page title */}
      {/* <section
          className="page-title-big-typography bg-dark-gray ipad-top-space-margin cover-background md-py-0"
          style={{
            backgroundImage: "url(/images/demo-hosting-pricing-bg.jpg)",
          }}
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
                    data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300, "delay": 300 }'
                  >
                    Start Your Business with Innoit Pvt Ltd
                  </span>
                </h2>
                <p className="text-white">
                  At Innoit, we believe in turning innovative ideas into
                  thriving businesses. Our mission is to empower entrepreneurs
                  and businesses with cutting-edge solutions tailored to their
                  unique needs. Whether you're just starting or looking to
                  scale, Innoit is your partner in success.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      {/* end page title */}
      {/* start section */}
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
                {/* <li className="nav-item">
              <a
                data-bs-toggle="tab"
                href="#tab_five1"
                className="nav-link text-dark-gray active"
              >
                London
                <span className="tab-border bg-dark-gray" />
              </a>
            </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link text-dark-gray"
                    data-bs-toggle="tab"
                    href="#tab_five2"
                  >
                    Islamabad
                    <span className="tab-border bg-dark-gray" />
                  </a>
                </li>
                {/* <li className="nav-item">
              <a
                className="nav-link text-dark-gray"
                data-bs-toggle="tab"
                href="#tab_five3"
              >
                Canada
                <span className="tab-border bg-dark-gray" />
              </a>
            </li> */}
                {/* <li className="nav-item">
              <a
                className="nav-link text-dark-gray"
                data-bs-toggle="tab"
                href="#tab_five4"
              >
                Switzerland
                <span className="tab-border bg-dark-gray" />
              </a>
            </li> */}
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
                        First Floor, Zeeshan Arcade,
                      </span>
                      <p>
                        Office No, 2, Street 49, G-13/2
                        <br />
                        Islamabad, 44220
                      </p>
                      {/* <span className="d-block">
                          <span className="text-dark-gray fw-600">T:</span>
                          <a href="tel:1234567890"> 123 456 7890</a>
                        </span> */}
                      <span className="d-block mb-30px">
                        <span className="text-dark-gray fw-600">Email:</span>{" "}
                        <a href="mailto:info@yourdomain.com">
                          Info@innoit.org{" "}
                        </a>
                      </span>
                      <a
                        href="https://www.google.com/maps/place/IWIZ+Solutions/@33.6513426,72.9509031,17.31z/data=!3m1!5s0x38df96319d19aa2d:0x2f9b2727ecaff80!4m14!1m7!3m6!1s0x38df9708235d38e5:0xca1fd23d6c8984c5!2sIWIZ+Solutions!8m2!3d33.6513181!4d72.9528765!16s%2Fg%2F11y2ct467f!3m5!1s0x38df9708235d38e5:0xca1fd23d6c8984c5!8m2!3d33.6513181!4d72.9528765!16s%2Fg%2F11y2ct467f?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
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
                {/* start tab content */}
                {/* <div className="tab-pane fade in" id="tab_five2">
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
                          Crafto - France
                        </span>
                        <p>
                          27 Eden Walk Eden Centre,
                          <br />
                          Orchard View, Paris, France
                        </p>
                        <span className="d-block">
                          <span className="text-dark-gray fw-600">T:</span>
                          <a href="tel:1234567890"> 123 456 7890</a>
                        </span>
                        <span className="d-block mb-30px">
                          <span className="text-dark-gray fw-600">E:</span>{" "}
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
                  </div> */}
                {/* end tab content */}
                {/* start tab content */}
                <div className="tab-pane fade in" id="tab_five3">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-6 sm-mb-30px">
                      <img
                        src="https://via.placeholder.com/457x350"
                        alt=""
                        className="w-100 border-radius-6px"
                      />
                    </div>
                    {/* <div className="col-lg-4 col-md-5 offset-md-1 text-center text-md-start">
                        <span className="text-dark-gray fs-18 fw-600 ls-minus-05px">
                          Crafto - Canada
                        </span>
                        <p>
                          2839 lalemant view road,
                          <br />
                          Niagara falls, Ottawa, Canada
                        </p>
                        <span className="d-block">
                          <span className="text-dark-gray fw-600">T:</span>
                          <a href="tel:1234567890"> 123 456 7890</a>
                        </span>
                        <span className="d-block mb-30px">
                          <span className="text-dark-gray fw-600">E:</span>{" "}
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
                      </div> */}
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
                        <span className="text-dark-gray fw-600">E:</span>{" "}
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
            <div className="col-12">
              <div className="bg-very-light-gray p-7 border-radius-8px">
                <form
                  action="email-templates/contact-form.php"
                  method="post"
                  className="contact-form-style-05"
                >
                  <div
                    className="col-12 text-center mb-5"
                    data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'
                  >
                    <span className="text-base-color fw-600 mb-5px text-uppercase d-block">
                      Get in touch with us
                    </span>
                    <h2 className="text-dark-gray fw-700 ls-minus-1px">
                      Let's get in touch
                    </h2>
                  </div>
                  <div
                    className="row justify-content-center"
                    data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 500, "staggervalue": 300, "easing": "easeOutQuad" }'
                  >
                    <div className="col-md-6 sm-mb-30px">
                      <input
                        className="mb-30px form-control bg-white required"
                        type="text"
                        name="name"
                        placeholder="Your name*"
                      />
                      <input
                        className="mb-30px form-control bg-white required"
                        type="email"
                        name="email"
                        placeholder="Your email address*"
                      />
                      <input
                        className="form-control bg-white"
                        type="tel"
                        name="phone"
                        placeholder="Your phone"
                      />
                    </div>
                    <div className="col-md-6">
                      <textarea
                        className="h-100 form-control bg-white"
                        name="message"
                        cols={40}
                        rows={6}
                        placeholder="Your message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-6 mt-30px sm-mt-20px">
                      <p className="mb-0 fs-13 lh-24 text-center text-md-start">
                        We are committed to protecting your privacy. We will
                        never collect information about you without your
                        explicit consent.
                      </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-30px sm-mt-20px">
                      <input type="hidden" name="redirect" defaultValue="" />
                      <button
                        className="btn btn-medium btn-dark-gray btn-box-shadow btn-rounded submit"
                        type="submit"
                      >
                        Send message
                      </button>
                    </div>
                    <div className="col-12">
                      <div className="form-results mt-20px d-none" />
                    </div>
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
                  className="text-decoration-line-bottom text-dark-gray fw-700"
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

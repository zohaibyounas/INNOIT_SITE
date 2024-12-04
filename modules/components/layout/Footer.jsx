import React from "react";

const Footer = () => {
  return (
    <>
      {/* start footer */}
      <footer
        className="footer-dark bg-dark-blue pb-0 cover-background background-position-left-top mt-2 "
        style={{
          backgroundImage: 'url("images/demo-hosting-footer-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5 md-mb-8 sm-mb-40px">
            {/* start footer column */}
            <div className=" col-lg-4 last-paragraph-no-margin order-sm-1 md-mb-40px xs-mb-30px">
              <a href="/" className="footer-logo mb-15px d-inline-block">
                <img
                  // src="\images\logofinal.png"
                  src="./images/logofinal.png"
                  // data-at2x="images/logo/saprise-white@2x.png"
                  alt=""
                />
              </a>

              <div className="elements-social social-icon-style-02 mt-20px xs-mt-15px">
                <ul className="small-icon light">
                  <li className="my-0">
                    <a
                      className="facebook"
                      // href="https://www.facebook.com/"
                      // target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li className="my-0">
                    <a
                      className="linkedin text-white"
                      // href="https://www.linkedin.com/"
                      // target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="my-0">
                    <a
                      className="twitter"
                      // href="http://www.twitter.com"
                      // target="_blank"
                    >
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li className="my-0">
                    <a
                      className="instagram"
                      // href="http://www.instagram.com"
                      // target="_blank"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-4 col-lg-2 xs-mb-30px order-sm-3 order-lg-2">
              <ul className="d-flex flex-column align-items-start">
                <li>
                  <a className="text-white" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/services">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div className=" col-lg-3 col-sm-4 xs-mb-30px order-sm-5 order-lg-4">
              <span className="fs-17 fw-500 d-block text-white mb-5px">
                Lets Connect
              </span>

              <a
                href="mailto:info@sapriseconsultancy.com"
                className="text-white lh-22  d-inline-block mb-10px"
              >
                info@innoit.org
              </a>
              <br />
              {/* <a
                href="mailto:sales@sapriseconsultancy.com"
                className="text-white lh-22  d-inline-block mb-20px"
              >
                info@innoit.org
              </a> */}
              <span className="d-inline-flex w-100 text-white">Address</span>
              <div className="text-white lh-22 d-inline-flex">
                First Floor, Zeeshan Arcade, Office No, 2, Street 49, G-13/2
                Islamabad, 44220
              </div>
            </div>
          </div>
          <div className="border-top border-color-transparent-white-light pt-35px pb-35px text-center">
            <span className="fs-13 w-60 lg-w-70 md-w-100 d-block mx-auto lh-22 text-white">
              ©2023-24 - INNOIT Consultancy | All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </>
  );
};

export default Footer;

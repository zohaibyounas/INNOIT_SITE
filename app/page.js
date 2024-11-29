import StickyElements from "@/modules/components/layout/StickyElements";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* start banner */}
      <section
        // className="cover-background full-screen bg-dark-gray ipad-top-space-margin position-relative section-dark md-h-auto"
        style={{ backgroundImage: 'url("images/demo-hosting-home-bg.jpg")' }}
      >
        <div
          id="particles-style-01"
          className="h-100 position-absolute left-0px top-0 w-100"
          data-particle="true"
          data-particle-options='{"particles": {"number": {"value": 12,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#ed00a8", "#ed00a8", "#ed00a8", "#ed00a8"]},"shape": {"type": "edge","stroke":{"width":0,"color":"#000000"}},"opacity": {"value": 0.8,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'
        />
        <div className="container h-100">
          <div className="row align-items-center justify-content-center h-100">
            <div className="col-xl-7 col-lg-8 col-md-10 text-white position-relative text-center  text-lg-start ">
              <div className="fs-70 sm-fs-60 xs-fs-60 fw-600 mb-20px ls-minus-4px overflow-hidden ">
                <div
                  className="d-inline-block mt-24 "
                  data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900 }'
                >
                  <span className="fs-50 sm-fs-40 xs-fs-30 fw-600 ls-minus-1px ">
                    Elevate Your Business with{" "}
                  </span>
                  <div
                    className="highlight-separator"
                    data-shadow-animation="true"
                    data-animation-delay={1500}
                  >
                    SAP Business One & Cloud Services.
                    <span>
                      <img src="images/highlight-separator.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="fs-19 fw-300 mb-30px w-80 sm-w-100 opacity-6 d-block mx-auto mx-lg-0 overflow-hidden">
                <span
                  className="d-inline-block lh-32 "
                  data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 300 }'
                >
                  Rely on INNOIT Consultancy for professional, effective, and
                  innovative solutions that accelerate your business growth.
                </span>
              </div>
              <div className="overflow-hidden pt-5px">
                <a
                  href="/contact"
                  className="btn btn-extra-large btn-yellow btn-rounded btn-box-shadow btn-switch-text d-inline-block me-15px xs-m-10px align-middle fw-600"
                  data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 500 }'
                >
                  <span>
                    <span className="btn-double-text" data-text="Contact us">
                      Contact us
                    </span>
                    <span>
                      <i className="feather icon-feather-arrow-right" />
                    </span>
                  </span>
                </a>
                {/* <div
              className="text-white fs-15 d-inline-block last-paragraph-no-margin align-middle"
              data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 700 }'
            >
              <p className="opacity-6 ls-minus-05px d-inline-block">
                Starting at only
              </p>
              <span className="fw-500 d-inline-block ">$2.78/mo*</span>
            </div> */}
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              <div
                className="outside-box-right-7 position-relative"
                data-anime='{ "opacity": [0, 1], "translateY": [100, 0], "easing": "easeOutQuad", "duration": 1200, "delay": 200 }'
              >
                <img
                  className="w-100"
                  src="/images/demo-hosting-home-slider-01.webp"
                  alt=""
                />
                <img
                  className="w-100 position-absolute left-minus-2px top-minus-5px animation-float"
                  src="/images/demo-hosting-home-slider-02.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end banner */}
      {/* start section */}
      <section
        className="bg-very-light-gray pt-20px pb-20px sm-pt-40px"
        data-anime='{ "opacity": [0, 1], "translateY": [0, 0], "easing": "easeOutQuad", "duration": 1000,"staggervalue": 300, "delay": 600 }'
      >
        <div className="container overlap-section">
          <div className="row justify-content-center overlap-section border-radius-6px overflow-hidden g-0 box-shadow-extra-large">
            <div className="col-lg-9 text-center fw-600 fs-24 lg-fs-22 ls-minus-05px text-dark-gray bg-white p-30px md-p-20px">
              <a
                href="/contact"
                className="fw-700 text-base-color text-decoration-line-bottom-medium"
              >
                Schedule a consultation
              </a>{" "}
              to discover tailored solutions for your business.{" "}
            </div>
            <div className="col-lg-3 text-center bg-yellow pt-30px pb-30px md-p-20px">
              <a
                href="/contact"
                className="fw-700 text-dark-gray text-dark-gray-hover fs-24 lg-fs-20 ls-minus-05px"
              >
                Lets Go
                <i className="feather icon-feather-arrow-right ms-5px" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section
        className="cover-background pt-5 xs-pt-8"
        style={{ backgroundImage: 'url("/images/demo-hosting-home-06.jpg")' }}
      >
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div
              className="col-lg-8 text-center"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 900, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <span className="text-base-color fw-600 mb-5px text-uppercase d-block">
                Our Capabilities. Discover what sets us apart and how we deliver
                exceptional results.{" "}
              </span>
              <h2 className="text-dark-gray fw-600 text-sm ls-minus-2px">
                Why Choose Us . Learn why we are the trusted partner for driving
                business success.{" "}
              </h2>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center"
            data-anime='{ "el": "childs",  "translateY": [0, 0], "perspective": [1200, 1200], "scale": [1.05, 1], "rotateX": [50, 0], "opacity": [0,1], "duration":600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            {/* start features box item */}
            <div className="col icon-with-text-style-07 transition-inner-all md-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
                <div className="feature-box-icon mb-30px">
                  <img
                    src="images/demo-hosting-home-icon-02.svg"
                    className="h-50px"
                    alt=""
                  />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    Tailored Solutions
                  </span>
                  <p className="mb-10px text-black">
                    Our SAP Business One consulting services are customized to
                    meet your unique business needs, providing precise and
                    effective solutions for enhanced productivity.
                  </p>
                  <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span>
                      {/* <span className="btn-text">Learn more</span> */}
                      {/* <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span> */}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-07 transition-inner-all md-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
                <div className="feature-box-icon mb-30px">
                  <img
                    src="images/demo-hosting-home-icon-03.svg"
                    className="h-50px"
                    alt=""
                  />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    Security
                  </span>
                  <p className="mb-10px text-black">
                    We ensure the highest level of data security in SAP B1
                    implementation with strict measures, including secure
                    access, audit controls, and encryption.
                  </p>
                  <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    {/* <span>
                      <span className="btn-text">Learn more</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                    </span> */}
                  </a>
                </div>
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-07 transition-inner-all xs-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
                <div className="feature-box-icon mb-30px">
                  <img
                    src="images/demo-hosting-home-icon-04.svg"
                    className="h-50px"
                    alt=""
                  />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    24/7 Support
                  </span>
                  <p className="mb-10px text-black">
                    Our dedicated support team is available 24/7, ensuring that
                    any issues with your SAP B1 environment are promptly
                    addressed for seamless business operations.
                  </p>
                  <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    {/* <span>
                      <span className="btn-text">Learn more</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                    </span> */}
                  </a>
                </div>
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-07 transition-inner-all">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
                <div className="feature-box-icon mb-30px">
                  <img
                    src="images/demo-hosting-home-icon-05.svg"
                    className="h-50px"
                    alt=""
                  />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    Scalability
                  </span>
                  <p className="mb-10px text-black">
                    Our scalable solutions allow you to adjust resources
                    flexibly within SAP B1 as your business grows, ensuring
                    consistent performance and reliability
                  </p>
                  <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    {/* <span>
                      <span className="btn-text">Learn more</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                    </span> */}
                  </a>
                </div>
              </div>
            </div>
            {/* end features box item */}
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-center mb-6 sm-mb-50px position-relative">
            <div
              className="col-lg-6 col-md-10 position-relative md-mb-30px"
              data-anime='{ "effect": "slide", "color": "#ffffff", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
            >
              <h4 className="text-black">Why Choose SAP Business One?</h4>
              <p className="text-black">
                <strong className="text-black">
                  Complete Business Control:
                </strong>{" "}
                Get a comprehensive view of your business processes, including
                finance, sales, inventory, and customer relations, all in one
                unified system.
              </p>
              <p className="text-black">
                <strong className="text-black">Affordable & Scalable:</strong>{" "}
                SAP B1 is a cost-effective, scalable solution that grows with
                your business, ensuring you have the tools you need at every
                stage of development.
              </p>
              <p className="text-black">
                <strong className="text-black">
                  Fast & Easy Implementation:
                </strong>{" "}
                With our expert team guiding you, SAP B1 can be seamlessly
                implemented with minimal disruption to your operations.
              </p>
              <p className="text-black">
                <strong className="text-black">User-Friendly Interface:</strong>{" "}
                Simplify your daily operations with an intuitive, easy-to-use
                interface that enhances productivity and reduces training time.
              </p>
              <p></p>
            </div>

            <div
              className="col-lg-5 offset-lg-1 last-paragraph-no-margin"
              data-anime='{ "el": "childs", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 900, "delay": 300, "easing": "easeOutCirc" }'
            >
              <span className="text-base-color fw-500 mb-15px text-uppercase d-block">
                "Transform Your Business with SAP Business One Implementation
                Services" Unlock the full potential of your business with SAP
                Business One, a leading ERP solution designed specifically for
                small and midsize businesses. Streamline your operations,
                enhance decision-making, and drive sustainable growth with SAP
                B1.
              </span>
              <h2 className="fw-400 text-dark-gray w-90 lg-w-100 text-dark-gray  ls-minus-2px">
                {/* Solutions for your business.{" "} */}
              </h2>
              <p className="w-90 sm-w-100 text-black">
                Experience enhanced efficiency, better decision-making, and
                accelerated growth with SAP Business One, tailored to meet the
                unique needs of your business.
              </p>
              {/* <ul className="p-0 mb-25px mt-15px list-style-01 w-90 lg-w-100">
                <li className="border-color-extra-medium-gray fw-600 text-dark-gray d-flex align-items-center pt-15px pb-15px">
                  <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle bg-solitude-blue me-10px text-center d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="fa-solid fa-check fs-13 text-base-color" />
                  </div>
                  Gain 360 control of your business.
                </li>
                <li className="border-color-extra-medium-gray fw-600 text-dark-gray d-flex align-items-center pt-15px pb-15px">
                  <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle bg-solitude-blue me-10px text-center d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="fa-solid fa-check fs-13 text-base-color" />
                  </div>
                  Affordable, Easy to implement and scalable
                </li>
              </ul> */}
              <a
                href="/contact"
                className="btn btn-large mt-6 btn-dark-gray btn-box-shadow btn-rounded btn-switch-text"
              >
                <span>
                  <span className="btn-double-text" data-text="Get a Quote">
                    Get a Quote
                  </span>
                  <span>
                    <i className="feather icon-feather-arrow-right" />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div
            className="row align-items-center justify-content-center border border-color-extra-medium-gray border-radius-100px md-border-radius-6px p-50px lg-p-20px m-0 box-shadow-quadruple-large"
            data-bottom-top="transform:scale(1.1, 1.1) translateY(30px);"
            data-top-bottom="transform:scale(1, 1) translateY(-30px);"
          >
            {/* start process step item */}
            <div className="col-lg-4 col-md-6 process-step-style-07 position-relative md-mb-30px">
              <div className="process-step-item d-flex align-items-center">
                <div className="process-step-icon-wrap position-relative">
                  <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px  fs-17 fw-500">
                    <img src="images/problem.svg" className="h-50px" alt="" />
                  </div>
                </div>
                <div className="process-content ps-20px last-paragraph-no-margin">
                  <span className="d-block fw-600 text-dark-gray fs-17 ls-minus-05px alt-font">
                    Streamline operations and drive growth with SAP Business One
                  </span>
                  {/* <p>Lorem ipsum simply printing</p> */}
                </div>
              </div>
            </div>
            {/* end process step item */}
            {/* start process step item */}
            <div className="col-lg-4 col-md-6 process-step-style-07 position-relative md-mb-30px">
              <div className="process-step-item d-flex align-items-center">
                <div className="process-step-icon-wrap position-relative">
                  <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px  fs-17 fw-500">
                    <img src="images/solution.svg" className="h-50px" alt="" />
                  </div>
                </div>
                <div className="process-content ps-20px last-paragraph-no-margin">
                  <span className="d-block fw-600 text-dark-gray fs-17 ls-minus-05px alt-font">
                    SAP Business One Enables Your Business to Grow:{" "}
                  </span>
                  {/* <p>Lorem ipsum simply printing</p> */}
                </div>
              </div>
            </div>
            {/* end process step item */}
            {/* start process step item */}
            <div className="col-lg-4 col-md-6 process-step-style-07 position-relative">
              <div className="process-step-item d-flex align-items-center">
                <div className="process-step-icon-wrap position-relative">
                  <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px  fs-17 fw-500">
                    <img src="images/growth.svg" className="h-50px" alt="" />
                  </div>
                </div>
                <div className="process-content ps-20px last-paragraph-no-margin">
                  <span className="d-block fw-600 text-dark-gray fs-17 ls-minus-05px alt-font">
                    Expand, streamline, and scale globally with SAP Business One
                  </span>
                  {/* <p>Lorem ipsum simply printing</p> */}
                </div>
              </div>
            </div>
            {/* end process step item */}
          </div>
        </div>
      </section>

      <StickyElements />
    </>
  );
}

import React, { Component } from "react";
import "./landing.css";
import intro_mobile from "./assets/img/logo3.png";
import logo from "./assets/img/logo2.png"

class landing extends Component {
  render() {
    return (
      <div>
        <header id="header-wrap">
          {/* Navbar Start */}
          <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <a href="index.html" className="navbar-brand">
                <img src={logo} alt />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="lni-menu" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                  <li className="nav-item active">
                    <a className="nav-link" href="#hero-area">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Navbar End */}
          {/* Hero Area Start */}
          <div id="hero-area" className="hero-area-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                  <div className="contents">
                    <h2 className="head-title">In-demand RPI tutors on demand.</h2>
                    <p>Find and connect and with RPI tutors for any class with confidence on RPI's very first remote, hiring platform for students.</p>
                    <div className="header-button">
                      <a
                        rel="nofollow"
                        href="https://rebrand.ly/fusion-ud"
                        className="btn btn-common"
                      >
                        Sign Up Now!
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                        className="btn btn-border video-popup"
                      >
                        Log In
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                  <div className="intro-img">
                    <img className="img-fluid" src={intro_mobile} alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Area End */}
        </header>
        {/* Services Section Start */}
        <section id="services" className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <h2
                className="section-title wow fadeInDown"
                data-wow-delay="0.3s"
              >
                How it Works
              </h2>
              <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
            </div>
            <div className="row">
              {/* Services item */}
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div
                  className="services-item wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <i className="lni-cog" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">1. Create an account</a>
                    </h3>
                    <p>
                      Register an account through your RPI email. It's free!
                    </p>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div
                  className="services-item wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="lni-stats-up" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">2. Pick from a variety of tutors</a>
                    </h3>
                    <p>
                      TutorBase connects you with top RPI tutors from every core class and subject offered during the semester.
                    </p>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div
                  className="services-item wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <div className="icon">
                    <i className="lni-users" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">3. Schedule an appointment</a>
                    </h3>
                    <p>
                      In five simple clicks, you'll have the help you need [edit later].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        ;{/* Services Section End */}
        <div>
          {/* About Section start */}
          <div className="about-area section-padding bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-xs-12 info">
                  <div
                    className="about-wrapper wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    <div>
                      <div className="site-heading">
                        <p className="mb-3">Manage Statistics</p>
                        <h2 className="section-title">
                          Detailed Statistics of your Company
                        </h2>
                      </div>
                      <div className="content">
                        <p>
                          Praesent imperdiet, tellus et euismod euismod, risus
                          lorem euismod erat, at finibus neque odio quis metus.
                          Donec vulputate arcu quam. Morbi quis tincidunt
                          ligula. Sed rutrum tincidunt pretium. Mauris auctor,
                          purus a pulvinar fermentum, odio dui vehicula lorem,
                          nec pharetra justo risus quis mi. Ut ac ex sagittis,
                          viverra nisl vel, rhoncus odio.
                        </p>
                        <a href="#" className="btn btn-common mt-3">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/about/img-1.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
          {/* About Section End */}
          {/* Features Section Start */}
          <section id="features" className="section-padding">
            <div className="container">
              <div className="section-header text-center">
                <h2
                  className="section-title wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  Awesome Features
                </h2>
                <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <div className="content-left">
                    <div
                      className="box-item wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <span className="icon">
                        <i className="lni-rocket" />
                      </span>
                      <div className="text">
                        <h4>Bootstrap 4 Based</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <div
                      className="box-item wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <span className="icon">
                        <i className="lni-laptop-phone" />
                      </span>
                      <div className="text">
                        <h4>Fully Responsive</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <div
                      className="box-item wow fadeInLeft"
                      data-wow-delay="0.9s"
                    >
                      <span className="icon">
                        <i className="lni-cog" />
                      </span>
                      <div className="text">
                        <h4>HTML5, CSS3 &amp; SASS</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <div className="show-box wow fadeInUp" data-wow-delay="0.3s">
                    <img src="assets/img/feature/intro-mobile.png" alt />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <div className="content-right">
                    <div
                      className="box-item wow fadeInRight"
                      data-wow-delay="0.3s"
                    >
                      <span className="icon">
                        <i className="lni-leaf" />
                      </span>
                      <div className="text">
                        <h4>Modern Design</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                    <div
                      className="box-item wow fadeInRight"
                      data-wow-delay="0.6s"
                    >
                      <span className="icon">
                        <i className="lni-layers" />
                      </span>
                      <div className="text">
                        <h4>Multi-purpose Template</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <div
                      className="box-item wow fadeInRight"
                      data-wow-delay="0.9s"
                    >
                      <span className="icon">
                        <i className="lni-leaf" />
                      </span>
                      <div className="text">
                        <h4>Working Contact Form</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Features Section End */}
          <section id="team" className="section-padding bg-gray">
            <div className="container">
              <div className="section-header text-center">
                <h2
                  className="section-title wow fadeInDown animated"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDelay: "0.3s",
                    MozAnimationDelay: "0.3s",
                    animationDelay: "0.3s",
                  }}
                >
                  Meet our team
                </h2>
                <div
                  className="shape wow fadeInDown animated"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDelay: "0.3s",
                    MozAnimationDelay: "0.3s",
                    animationDelay: "0.3s",
                  }}
                />
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-xs-12">
                  <div
                    className="team-item wow fadeInRight animated"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDelay: "0.2s",
                      MozAnimationDelay: "0.2s",
                      animationDelay: "0.2s",
                    }}
                  >
                    <div className="team-img">
                      <img
                        className="img-fluid"
                        src="assets/img/team/team-01.png"
                        alt
                      />
                    </div>
                    <div className="contetn">
                      <div className="info-text">
                        <h3>
                          <a href="#">David Smith</a>
                        </h3>
                        <p>Front-end Developer</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eos id officiis hic tenetur.
                      </p>
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-facebook-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-twitter-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-instagram-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-xs-12">
                  <div
                    className="team-item wow fadeInRight animated"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDelay: "0.4s",
                      MozAnimationDelay: "0.4s",
                      animationDelay: "0.4s",
                    }}
                  >
                    <div className="team-img">
                      <img
                        className="img-fluid"
                        src="assets/img/team/team-02.png"
                        alt
                      />
                    </div>
                    <div className="contetn">
                      <div className="info-text">
                        <h3>
                          <a href="#">ERIC PETERSON</a>
                        </h3>
                        <p>Product Designer</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eos id officiis hic tenetur.
                      </p>
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-facebook-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-twitter-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-instagram-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-xs-12">
                  <div
                    className="team-item wow fadeInRight animated"
                    data-wow-delay="0.6s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDelay: "0.6s",
                      MozAnimationDelay: "0.6s",
                      animationDelay: "0.6s",
                    }}
                  >
                    <div className="team-img">
                      <img
                        className="img-fluid"
                        src="assets/img/team/team-03.png"
                        alt
                      />
                    </div>
                    <div className="contetn">
                      <div className="info-text">
                        <h3>
                          <a href="#">DURWIN BABB</a>
                        </h3>
                        <p>Lead Designer</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eos id officiis hic tenetur.
                      </p>
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-facebook-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-twitter-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-instagram-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-xs-12">
                  <div
                    className="team-item wow fadeInRight animated"
                    data-wow-delay="0.8s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDelay: "0.8s",
                      MozAnimationDelay: "0.8s",
                      animationDelay: "0.8s",
                    }}
                  >
                    <div className="team-img">
                      <img
                        className="img-fluid"
                        src="assets/img/team/team-04.png"
                        alt
                      />
                    </div>
                    <div className="contetn">
                      <div className="info-text">
                        <h3>
                          <a href="#">MARIJN OTTE</a>
                        </h3>
                        <p>Lead Designer</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eos id officiis hic tenetur.
                      </p>
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-facebook-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-twitter-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="lni lni-instagram-filled"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Footer Section Start */}
          <footer id="footer" className="footer-area section-padding">
            <div className="container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                    <div className="widget">
                      <h3 className="footer-logo">
                        <img src="assets/img/logo.png" alt />
                      </h3>
                      <div className="textwidget">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque lobortis tincidunt est, et euismod purus
                          suscipit quis.
                        </p>
                      </div>
                      <div className="social-icon">
                        <a className="facebook" href="#">
                          <i className="lni-facebook-filled" />
                        </a>
                        <a className="twitter" href="#">
                          <i className="lni-twitter-filled" />
                        </a>
                        <a className="instagram" href="#">
                          <i className="lni-instagram-filled" />
                        </a>
                        <a className="linkedin" href="#">
                          <i className="lni-linkedin-filled" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <h3 className="footer-titel">Products</h3>
                    <ul className="footer-link">
                      <li>
                        <a href="#">Tracking</a>
                      </li>
                      <li>
                        <a href="#">Application</a>
                      </li>
                      <li>
                        <a href="#">Resource Planning</a>
                      </li>
                      <li>
                        <a href="#">Enterprise</a>
                      </li>
                      <li>
                        <a href="#">Employee Management</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <h3 className="footer-titel">Resources</h3>
                    <ul className="footer-link">
                      <li>
                        <a href="#">Payment Options</a>
                      </li>
                      <li>
                        <a href="#">Fee Schedule</a>
                      </li>
                      <li>
                        <a href="#">Getting Started</a>
                      </li>
                      <li>
                        <a href="#">Identity Verification</a>
                      </li>
                      <li>
                        <a href="#">Card Verification</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <h3 className="footer-titel">Contact</h3>
                    <ul className="address">
                      <li>
                        <a href="#">
                          <i className="lni-map-marker" /> 105 Madison Avenue -{" "}
                          <br /> Third Floor New York, NY 10016
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-phone-handset" /> P: +84 846 250 592
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-envelope" /> E: contact@uideck.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="copyright-content"></div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          ;
        </div>
        ;
      </div>
    );
  }
}

export default landing;

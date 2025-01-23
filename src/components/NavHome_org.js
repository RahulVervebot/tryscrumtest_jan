import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo-dark.png";
import Table from 'react-bootstrap/Table'

class NavHome extends Component {
  
  constructor() {
    super();
    this.state = {
      sticky: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };


  render() {
    return (
      <header className="site-header site-header__header-two ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="main-logo"
                  width="250"
                  alt="Awesome alter text"
                />
              </Link>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                {/* <li className="current"> */}
                <li>
                  <Link>Studio</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/scrum-master-studio">Scrum Master Studio</Link>
                    </li>
                    <li>
                      <Link to="/product-owner-studio">Product Owner Studio</Link>
                    </li>
                    <li>
                      <Link to="/agile-leadership-studio">Agile Leadership Studio</Link>
                    </li>
                    <li>
                      <Link to="/webcast">Webcast</Link>
                    </li>
                  </ul> 
                </li>
                
                <li>
                  <a href="#none">Resources</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <a href="#none">WhitePapers</a>
                      <ul className="sub-menu">

                        <li>
                          <Link to="/resources/whitepaper-stages-of-scrum-mastery/">The Stages of Scrum Mastery</Link>
                        </li>

                        <li>
                          <Link to="/whitepaper-scaling-scrum/">Scaling Scrum with Nexus</Link>
                        </li>
                        
                      </ul>
                    </li>
                    <li>
                      <Link to="/podcasts">Podcasts</Link>
                    </li>
                    <li>
                      <Link to="/labs">TryScrum labs</Link>
                    </li>

                    <li>
                      <Link to="/scrumplus">TryScrum Plus</Link>
                    </li>
                    <li>
                      <Link to="/which-scrum-role-is-right-for-me">Which Role Is Right For Me</Link>
                    </li>

                  </ul>
                </li>

                <li>
                  <a href="courses.html">Courses</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/courses">Courses</Link>
                      
                    </li> 
                  </ul>
                </li>

                <li>
                  <a href="teachers.html">Teachers</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/teachers">Teachers</Link>
                    </li>
                    <li>
                      <Link to="/teacher-details">Teachers Details</Link>
                    </li>
                    <li>
                      <Link to="/become-teacher">Become Teacher</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html">News</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/news">News Page</Link>
                    </li>
                    <li>
                      <Link to="/news-details">News Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            
              
              <div className="right-side-box">
              <div className="searchBox">
                  <input
                    className="searchInput"
                    type="text"
                    aria-label="Search"
                    placeholder="Type to filter..."
                  />
                </div>
                
              {/* <div className="header__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>  */}
              
            </div>
          </div>

        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>

      </header>
    );
  }
}
export default NavHome;

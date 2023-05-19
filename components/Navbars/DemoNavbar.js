import React, { useEffect } from "react";
import Link from "next/link";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useRouter } from "next/router";

const DemoNavbar = () => {
  const router = useRouter();
  const [collapseClasses, setCollapseClasses] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);

  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }, [])

  useEffect(() => {
    const login = localStorage.getItem("login");

    if (login === null) setIsLogin(false);
    else setIsLogin(true);
  }, [])

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("login");
    setIsLogin(false);
    router.replace("/login");
  }
  
  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5">
              <Link href="/" passHref>
                <Image alt="..." src={require("../../assets/ico.webp")} />
              </Link>
              {""}
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-close text-center" xs="12">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavLink nav href="/" className="text-white">Home</NavLink>
                {/* <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Components</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-spaceship" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Getting started
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Learn how to use Argon compiling Scss, change
                            brand colors and more.
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Foundation
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Learn more about colors, typography, icons and the
                            grid system we used for Argon.
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-ui-04" />
                        </div>
                        <Media body className="ml-3">
                          <h5 className="heading text-warning mb-md-1">
                            Components
                          </h5>
                          <p className="description d-none d-md-inline-block mb-0">
                            Browse our 50 beautiful handcrafted components
                            offered in the Free version.
                          </p>
                        </Media>
                      </Media>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                {/* <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Examples</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/landing-page">Landing</DropdownItem>
                    <DropdownItem to="/profile-page">Profile</DropdownItem>
                    <DropdownItem to="/login-page">Login</DropdownItem>
                    <DropdownItem to="/register-page">Register</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.youtube.com/@Viapulsa"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-play" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Youtube
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Subscribe on Youtube
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://instagram.com/viapulsacom"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-block ml-lg-4">
                  {isLogin ? (
                    <Button onClick={logout} className="btn-warning shadow">
                      <span className="text-white">Logout</span>
                    </Button>
                  ) : (
                    <Button href="/login" className="btn-warning shadow">
                      <span className="text-white">Login</span>
                    </Button>
                  )}
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default DemoNavbar;
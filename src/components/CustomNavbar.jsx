import React from "react";
import { Link } from "react-router-dom";  
import { assets } from "../assets/assets"; 
import { Dropdown, Navbar, Nav, Container } from "react-bootstrap"; 

const CustomNavbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark py-3"> 
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={assets.foodkart}
            className="img-fluid"
            style={{ maxWidth: "100px" }}
            alt="foodkart logo"
          />
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center gap-3" style={{ fontFamily: "rochester" }}>  
            <Nav.Item className="position-relative">
              <Link className="nav-link text-light " to="/">HOME</Link>
              <hr className="underline" />
            </Nav.Item>
            <Nav.Item className="position-relative">
              <Link className="nav-link text-light " to="/menus">OUR MENU</Link>
              <hr className="underline" />
            </Nav.Item>
            <Nav.Item className="position-relative">
              <Link className="nav-link text-light " to="/aboutus">ABOUT US</Link>
              <hr className="underline" />
            </Nav.Item>
            <Nav.Item className="position-relative">
              <Link className="nav-link text-light " to="/contact">CONTACT</Link>
              <hr className="underline" />
            </Nav.Item>
          
          </Nav>

          {/* ✅ Profile Dropdown (Right Aligned) */}
          {isAuthenticated ? (
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="border-0 bg-transparent">
                <img
                  src={assets.profile_icon}
                  alt="Profile Icon"
                  className="img-fluid"
                  style={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link className="btn btn-dark text-light ms-3" style={{ fontFamily: "rochester" }} to="/login">LOGIN</Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-bootstrap";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center md-4">
      <NavItem>
        {step1 ? (
          <Link to="/login">
            <Nav.Link>
              Login<i className="fa-solid fa-right-to-bracket"></i>
            </Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>
            Login<i className="fa-solid fa-right-to-bracket"></i>
          </Nav.Link>
        )}
      </NavItem>

      <NavItem>
        {step2 ? (
          <Link to="/shipping">
            <Nav.Link>
              Shipping <i className="fa-solid fa-truck-fast"></i>
            </Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>
            Shipping <i className="fa-solid fa-truck-fast"></i>
          </Nav.Link>
        )}
      </NavItem>

      <NavItem>
        {step3 ? (
          <Link to="/payment">
            <Nav.Link>
              Payment <i className="fa-regular fa-credit-card"></i>
            </Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>
            Payment <i className="fa-regular fa-credit-card"></i>
          </Nav.Link>
        )}
      </NavItem>

      <NavItem>
        {step4 ? (
          <Link to="/placeorder">
            <Nav.Link>
              Place Order <i className="fa-solid fa-receipt"></i>
            </Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>
            Place Order <i className="fa-solid fa-receipt"></i>
          </Nav.Link>
        )}
      </NavItem>
    </Nav>
  );
}

export default CheckoutSteps;

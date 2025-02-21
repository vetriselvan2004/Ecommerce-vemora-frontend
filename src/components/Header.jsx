import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
import { logout } from "../actions/userActions";
import '../index.css'
function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  // userInfo.isAdmin = true;
  return (
         <>
         <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vemora</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/cart">Cart</a>
        </li>

        {userInfo ? (
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {userInfo.name}
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/profile">Profile</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#" onClick={logoutHandler}>Logout</a></li>       
                </ul>
                </li>
              ) : (
                // <Link to="/login">
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                user
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/login" >Login</a></li>
                  <li><a class="dropdown-item" href="/register" >Register</a></li>
                </ul>
                </li>
                // </Link>
              )}
      </ul>
    </div>
  </div>
</nav>
         </>

  );
}

export default Header;

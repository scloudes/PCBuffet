import React from "react";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className=" navbar-light bg-light border-bottom">
      <div className="container-fluid px-4">
        <div className="row">
          <div className="col-sm-12 col-md-6 text-md-start text-center">
            <a className="navbar-brand" href="#intersection">
              <img
                src="/icons/Logo.svg"
                alt="PC Buffet Logo"
                width="192"
                height="108"
                className="d-inline-block align-text-top"
              />
            </a>
          </div>
          <div className="col-sm-12 col-md-6 d-none d-md-flex justify-content-end align-items-center">
            <Button
              cls="btn-outline-dark btn-lg"
              text="Conoce tu computadora ideal"
            ></Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

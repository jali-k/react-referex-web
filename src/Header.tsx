import React from "react";

const Header = () => {
  return (
    <div className="row upper-top-padding up-ection">
      <div className=" title-adjustments col-sm-6">
        <h1 className="text-start outfit-medium-title">REFEREX</h1>
      </div>
      <div className="col-sm-6 buttons-adjustments">
        <div className="row ">
          <div className="col text-end">
            <button className="btn btn-outline-primary customized-button">
              Login
            </button>

            <button id="singup" className="btn btn-primary customized-button">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

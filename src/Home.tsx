import React, { useEffect, useState } from "react";

const Home = () => {
  // Left image
  const [paddingclass, setPaddingClass] = useState("left-image-padding");

  useEffect(() => {
    if (window.innerWidth >= 1400) {
      setPaddingClass("left-image-padding");
    } else {
      setPaddingClass("padding-for-small");
    }
  }, [paddingclass]);

  const imageClasss = paddingclass + " col-xxl-6 text-center";
  console.log(imageClasss);

  return (
    <>
      // Upper section
      <div className="container-fluid up-ection">
        {/* Top part */}
        <div className="row upper-top-padding">
          <div className=" title-adjustments col-sm-6">
            <h1 className="text-start outfit-medium-title">REFREX</h1>
          </div>
          <div className="col-sm-6 buttons-adjustments">
            {/* <div className="row">
            <div className="col">
              <button className="btn btn-primary mr-0">Button 1</button>
              <button className="btn btn-secondary ml-0">Button 2</button>
              <button className="btn btn-secondary ml-0">Button 2</button>
              <button className="btn btn-secondary ml-0">Button 2</button>
            </div>
          </div> */}
            <div className="row ">
              <div className="col text-end">
                <button className="btn btn-outline-primary customized-button">
                  Login
                </button>

                <button
                  id="singup"
                  className="btn btn-primary customized-button"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="row">
          <div className={imageClasss}>
            <img
              src="src\assets\Images\money.jpg"
              width="100%"
              height="80%"
              alt=""
            />
          </div>
          <div className="right-text-padding col-xxl-6">
            <h1 className="text-start line-height-3 outfit-bold">
              Want Some Extra Money For Your Expenses?
            </h1>
            <p className="text-start upper-pharagraph outfit-light">
              Follow our course “Master Referral Marketing” and unlock a
              powerful income stream. Learn how to leverage satisfied customers
              for lucrative referrals. Enroll now and boost your earnings!
            </p>
            <button className="btn btn-outline-primary customized-button">
              Entroll now
            </button>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="container-fluid second-section">
        <div className="row">
          <div className={imageClasss}>
            <img
              src="src\assets\Images\money.jpg"
              width="100%"
              height="80%"
              alt=""
            />
          </div>
          <div className="right-text-padding col-xxl-6">
            <h1 className="text-start line-height-3 outfit-bold">
              Want Some Extra Money For Your Expenses?
            </h1>
            <p className="text-start upper-pharagraph outfit-light">
              Follow our course “Master Referral Marketing” and unlock a
              powerful income stream. Learn how to leverage satisfied customers
              for lucrative referrals. Enroll now and boost your earnings!
            </p>
            <button className="btn btn-outline-primary customized-button">
              Entroll now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

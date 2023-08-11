import React, { useEffect, useState } from "react";

const Home = () => {
  // Left image
  const [paddingclass, setPaddingClass] = useState("left-image-padding");
  const [paddingText, setPaddingText] = useState("right-text-padding");
  useEffect(() => {
    if (window.innerWidth >= 1400) {
      setPaddingClass("left-image-padding");
      setPaddingText("right-text-padding");
    } else {
      setPaddingClass("padding-for-small");
      setPaddingText("padding-for-small");
    }
  }, [paddingclass, paddingText]);

  const imageClasss = paddingclass + " col-xxl-6";
  console.log(imageClasss);

  const textClass = paddingText + " col-xxl-6 text-start ";
  console.log(paddingText);

  return (
    <>
      <div className="container-fluid ">
        {/* Upper part */}
        <div className="row up-ection upPadding">
          <div
            className={
              window.innerWidth >= 1400
                ? "left-image-padding col-xxl-6"
                : "padding-for-small col-xxl-6 text-center"
            }
          >
            <img
              src="src\assets\Images\money.jpg"
              width="100%"
              height={window.innerWidth >= 1400 ? "780px" : "100%"}
              alt=""
            />
          </div>
          <div
            className={
              window.innerWidth >= 1400
                ? "right-text-padding col-xxl-6 text-start"
                : "padding-for-small col-xxl-6 text-center"
            }
          >
            <h1
              className={
                window.innerWidth >= 1400
                  ? "text-start line-height-3 outfit-bold"
                  : "text-center line-height-3 outfit-bold"
              }
            >
              Want Some Extra Money For Your Expenses?
            </h1>
            <p
              className={
                window.innerWidth >= 1400
                  ? "text-start upper-pharagraph outfit-light"
                  : "text-center upper-pharagraph outfit-light"
              }
            >
              Follow our course “Master Referral Marketing” and unlock a
              powerful income stream. Learn how to leverage satisfied customers
              for lucrative referrals. Enroll now and boost your earnings!
            </p>
            <button className="btn btn-outline-primary customized-button outfit-light">
              Entroll now
            </button>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="container-fluid second-section section-two-upper">
        <div className="row">
          <div
            className={
              window.innerWidth >= 1400
                ? "left-text-padding col-xxl-6 text-start"
                : "padding-for-small text-center"
            }
          >
            <h1 className="line-height-3 outfit-bold">
              What Is Referral Marketing?
            </h1>
            <p className="upper-pharagraph outfit-light">
              <ul>
                <li>Power of word-of-mouth marketing</li>
                <li> Share apps, earn money</li>
                <li>Trust-based recommendations</li>
                <li>Rewards for successful referrals</li>
                <li>Win-win for referrers and businesses</li>
                <li>Online tracking with unique links</li>
                <li>Cost-effective and high conversion</li>
                <li>Tap into social networks</li>
                <li>Drive sales, boost brand awareness</li>
              </ul>
            </p>
            <button className="btn btn-outline-primary customized-button">
              Entroll now
            </button>
          </div>
          <div
            className={
              window.innerWidth >= 1400
                ? "right-image-padding col-xxl-6 text-center"
                : "padding-for-small"
            }
          >
            <img
              src="src\assets\Images\referel.jpg"
              width="100%"
              height={window.innerWidth >= 1400 ? "780px" : "100%"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid up-ection">
        {/* Third Section */}
        <div className="row upPadding">
          <div
            className={
              window.innerWidth >= 1400
                ? "left-image-padding col-xxl-6"
                : "padding-for-small col-xxl-6 text-center"
            }
          >
            <img
              src="src\assets\Images\growth.jpg"
              width="100%"
              height={window.innerWidth >= 1400 ? "780px" : "100%"}
              alt=""
            />
          </div>
          <div
            className={
              window.innerWidth >= 1400
                ? "right-text-padding col-xxl-6 text-star"
                : "padding-for-small col-xxl-6 text-center"
            }
          >
            <h1
              className={
                window.innerWidth >= 1400
                  ? "text-start line-height-3 outfit-bold"
                  : "text-center line-height-3 outfit-bold"
              }
            >
              How Our Course Empowers You for Growth?
            </h1>
            <p
              className={
                window.innerWidth >= 1400
                  ? "text-start upper-pharagraph outfit-light"
                  : "text-center upper-pharagraph outfit-light"
              }
            >
              Discover the art of referral marketing with our course.
              <ul>
                <li>Expand your network and promote apps like a pro</li>
                <li>Earn on your own terms - flexible opportunity</li>
                <li>
                  Perfect for students, graduates, housewives, and almost
                  everyone
                </li>
              </ul>
              Embrace your potential, seize the moment, and unlock new avenues
              for personal and financial growth!
            </p>
          </div>
        </div>
      </div>
      <div className="outer-div">
        <div className="rounded-div">
          <div className="title outfit-light">Are You Ready?</div>
          <p className="description">
            Discover Referral Magic, Boost your business with REFEREX
          </p>
          <h3 className="outfit-bold">change your future with</h3>
          <h3 className="outfit-bold">just one click</h3>
          <a href="#" className="button">
            Enroll Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

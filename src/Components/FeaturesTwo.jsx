import React from "react";

const FeaturesTwo = () => {
  return (
    <div>
      <div
        className="container1"
        style={{ position: "relative", top: "200px" }}
      >
        <img src="public\assets\Container.svg" alt="" />
      </div>
      <div
        className="container2"
        style={{ position: "relative", top: "200px" }}
      >
        <img src="public\assets\Content.svg" alt="" />
      </div>
      <div
        className="row1"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          top: "100px",
        }}
      >
        <div className="col1">
          <img src="public\assets\Featured icon.svg" alt="" />
          <h1>Share team inboxes</h1>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
        </div>
        <div className="col2">
          <img src="public\assets\Featured icon 2.svg" alt="" />
          <h1>Deliver instant answers</h1>
          <p>
            n all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
        </div>
        <div className="col3">
          <img src="public\assets\Featured icon.svg" alt="" />
          <h1>Manage your team with reports</h1>
          <p>
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTwo;

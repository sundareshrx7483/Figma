import React from "react";
import "../CSS/features.css";
const Features = () => {
  return (
    <div>
      <div
        id="features"
        style={{
          width: "1280px",
          height: "560px",
        //   border: "2px solid red",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            position: "relative",
            right: "20px",
            top: "0px",
            fontWeight: "600",
            fontSize: "16px",
            color: " #6941C6",
          }}
        >
          Features
        </p>
        <h1
          style={{
            fontWeight: "600",
            fontSize: "36px",
            color: " #101828",
            position: "relative",
            top: "0px",
            left: "-20px",
          }}
        >
          Analytics that feels like it’s from the future
        </h1>
        <div
          className="texts"
          style={{
            width: "600px",
            height: "60px",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "30px",
            color: " #475467",
            position: "relative",
            top: "0px",
          }}
        >
          <p
            style={{
              width: "110%",
              position: "relative",
              top: "-40px",
              right: "30px",
            }}
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
          </p>
          <p
            style={{
              width: "110%",
              position: "relative",
              top: "-70px",
              left: "40px",
            }}
          >
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        <div
          className="row1"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
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
        <div
          className="row2"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="col1">
            <img src="public\assets\Featured icon 4.svg" alt="" />
            <h1>Connect with customers</h1>
            <p>
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <div className="col2">
            <img src="public\assets\Featured icon 5.svg" alt="" />
            <h1>Connect the tools you already use</h1>
            <p>
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="col3">
            <img src="public\assets\Featured icon 6.svg" alt="" />
            <h1 >Our people make the difference</h1>
            <p>
              We’re an extension of your customer service team, and all of our
              resources are free. Chat to our friendly team 24/7 when you need
              help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

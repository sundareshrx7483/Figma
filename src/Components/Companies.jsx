import React from "react";

const Companies = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // border: "2px solid red",
        height: "296px",
        width: "1440px",
        paddingRight: "32px",
        left: "32px",
        gap: "32px",
      }}
    >
      <div
        className="brands"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <p style={{ position: "relative", left: "530px", top: "-40px" , color: " #475467",fontWeight:'500'}}>
          Join 4,000+ companies already growing
        </p>

        <img
          src="\assets\Logos.svg"
          style={{
            height: "48px",
            width: "70%",
            position: "relative",
            right: "100px",
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Companies;

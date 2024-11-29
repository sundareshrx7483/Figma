import React from "react";

const Mid = () => {
  return (
    <div>
      <div
        className="mid"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "1216px",
          height: " 380px",
          flexDirection: "column",
            position: "relative",
          top:'100px'
        }}
      >
        <img src="public\assets\Fictional company logo.svg" alt="" id="img1" />

        <h1 style={{ color: " #101828",position:"relative",top:"-20px" }}>
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h1>

        <img src="public\assets\Avatar and text.svg" alt="" style={{ position:"relative",top:"-20px" }} />
      </div>
    </div>
  );
};

export default Mid;

import { Button, Stack } from "@mui/material";
import React from "react";

const GetinTouch = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="get"
        style={{
          position: "relative",
          top: "200px",
          left: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          width: "1216px",
          height: "298px",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          className="geticon"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src="public\assets\Avatar group.svg" alt="" />
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 600,
              position: "relative",
              width: "768px",
              height: "66px",
              left: "295px",
            }}
          >
            Still have questions?
          </h1>
          <p
            style={{
              position: "relative",
              color: "rgba(71, 84, 103, 1)",
              top: "-50px",
            }}
          >
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>

        <Button
          variant="contained"
          disableElevation
          style={{
            backgroundColor: "#7F56D9",
            position: "relative",
            top: "70px",
            right: "560px",
          }}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default GetinTouch;

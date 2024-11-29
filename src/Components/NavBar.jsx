import React from "react";
import "../CSS/nav.css";
import { FaRegUserCircle } from "react-icons/fa";
import "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@mui/material";

import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import Companies from "./Companies";
import Features from "./Features";
import Mid from "./Mid";
import FeaturesTwo from "./FeaturesTwo";
import Faq from "./Faq";
import GetinTouch from "./GetinTouch";
import Blog from "./Blog";
const NavBar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img
            src="public\assets\Screenshot 2024-11-29 130128.png"
            alt=""
            style={{
              position: "relative",
              left: "1px",
              borderRadius: "5px",
              height: "18px",
              width: "18px",
            }}
          />
          <h3>Untitled UI</h3>
          <ul id="menu">
            <li>Home</li>
            <li>
              products
              <select name="products" id="">
                products
              </select>
            </li>
            <li>
              Resources
              <select name="Resources" id="">
                Resources
              </select>
            </li>
            <li>pricing</li>
          </ul>

          <div className="userIcon">
          <img src="public\assets\Dropdown.svg" alt="" />
          </div>
        </div>
          </header>
          
          <hr />

      <div
        className="des"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          top: "75px",
        }}
      >
        <div
          className="badge"
          style={{
            width: "355px",
            height: "32px",
            // border: "1px solid red",
            borderRadius: "16px",
            padding: "4px 10px 4px 4px",
            gap: "12px",
            mixBlendMode: "multiply",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            border: " 1px solid rgba(233, 215, 254, 1)",
          }}
        >
          <div
            id="newfeature"
            style={{
              width: "82px",
              height: "20px",
              color: " rgba(105, 65, 198, 1)",
              border: " 1px solid rgba(233, 215, 254, 1)",
              borderRadius: "16px",
              fontSize: "small",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            New feature
          </div>
          <div
            id="checkout"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: " rgba(105, 65, 198, 1)",
            }}
          >
            checkout the team dashboard <FaArrowRightLong />
          </div>
        </div>
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
            position: "relative",
            right: "10px",
            lineHeight: "72px",
            fontSize: "30px",
            letterSpacing: "-2%",
            top: "-25px",
          }}
        >
          <h1>Beautiful analytics to grow smarter</h1>
        </div>

        <div
          className="contentlight"
          style={{
            width: "768px",
            height: "60px",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "30px",
            color: " #475467",
            position: "relative",
            top: "-60px",
          }}
        >
          <pre>
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
          </pre>
          <pre style={{ position: "relative", left: "80px", top: "-15px" }}>
            and retain more users. Trusted by over 4,000 startups.
          </pre>
        </div>
        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "195px",
          }}
        >
          <Button
            variant="outlined"
            color="lightgrey"
            size="medium"
            startIcon={<PlayCircleFilledWhiteOutlinedIcon />}
          >
            Demo
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: " #7F56D9" }}
            disableElevation
            size="medium"
          >
            Signup
          </Button>
        </div>
        <div
          className="mockup"
          style={{
            width: "1200px",
            height: "560px",
            border: "8px solid #101828",
              borderRadius: "12px",
              position: "relative",
              top:"20px"
          }}
        >
          <img src="public\assets\Screen mockup (REPLACE FILL).png" alt=""  style={{height:"100%",width:"100%"}}/>
              </div>
              
              <Companies />
              <Features />
        <Mid />
        <FeaturesTwo />
        <Faq />
        <GetinTouch />
      
        <Blog/>
      </div>
    </div>
  );
};

export default NavBar;

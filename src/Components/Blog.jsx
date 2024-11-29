import { Button, Stack } from "@mui/material";
import React from "react";

const Blog = () => {
  return (
    <>
      {/* <div className="blog" style={{ position: "relative", top: "250px", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection:"column" }}>
        <div
          className="mainBlog"
          style={{
            width: "1100px",
            height: "130px",
            padding: "0px 32px",
            gap: "32px",
              opacity: 1,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              position: "relative",
              border:"2px solid red"
          }}
        >
          <div style={{border:"2px solid red",width:"1216px",height:"60px"}}>
            <p
              style={{
                color: "#6941C6",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                              textDecorationSkipInk: "none",
                              position: "relative",
                              right:""
              }}
            >
              Our blog
            </p>
            <Button disableElevation style={{position:"relative",left:"900px",top:"-45px",backgroundColor:"#7F56D9"}} variant="contained">View all posts</Button>
                  </div>
                  <h1>Latest blog posts</h1>
        </div>
      </div> */}
      <img
        src="\assets\Blog section.svg"
        style={{ position: "relative", top: "250px" }}
        alt=""
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        className="trail"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Start your free trail</h1>
        <p
          style={{
            position: "relative",
            left: "30px",
            
            color: "#475467",
          }}
        >
          Join over 4,000+ startups already growing with Untitled.
              </p>
             
              <Stack  style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexDirection:"row",padding:"20px",margin:'20px'}}>
                  <Button variant="outlined"  style={{border: "1px solid grey",color:"grey"}} disableElevation>Learn more</Button>
                  <Button variant="contained" disableElevation style={{backgroundColor: "#6941C6",marginLeft:"10px"}}>Get Started</Button>
                  
              </Stack>
           
              
              
          </div>
          <img src="\assets\Footer.svg" alt="" />
    </>
  );
};

export default Blog;

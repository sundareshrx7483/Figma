import React from "react";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
const Faq = () => {
  return (
    <div>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          top: "200px",
        }}
      >
        <div className="title">
          <h1>Frequently asked questions</h1>
          <p style={{ position: "relative", left: "25px", color: "#475467" }}>
            Everything you need to know about the product and billing
          </p>
        </div>
        <article
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "504px",
            width: "1280px",
            // border: "2px solid red",
          }}
        >
          <div
            className="content"
            style={{
              height: "504px",
              width: "768px",
              gap: "32px",
            //   border: "2px solid red",
            }}
          >
            <div
              style={{
                height: "84px",
                width: "768px",
                gap: "32px",
                // border: "2px solid red",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "18px", fontWeight: "500" ,textAlign:"left",position:"relative",left:"-135px"}}>
                  Is  there a free trial available?
                </h1>
                <RemoveCircleOutlineOutlinedIcon style={{position:"relative",left:"100px",color:" #475467"}} />
              </div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  position: "relative",
                                  top: "-30px",
                  color:" #475467"
                }}
              >
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
                          </p>
                          
                      </div>
                      <hr />
            <div
              style={{
                height: "52px",
                width: "768px",
                gap: "32px",
                // border: "2px solid red",
              }}
                      >
                           <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "18px", fontWeight: "500" ,textAlign:"left",position:"relative",left:"-135px"}}>
                Can I change my plan later?
                </h1>
                              {/* <RemoveCircleOutlineOutlinedIcon /> */}
                              <ControlPointOutlinedIcon style={{ position: "relative", left: "100px", color: " #475467" }}  />
              </div>
                      </div>
                      <hr />
            <div
              style={{
                height: "52px",
                width: "768px",
                gap: "32px",
                // border: "2px solid red",
              }}
                      >
                           <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "18px", fontWeight: "500" ,textAlign:"left",position:"relative",left:"-128px"}}>
                What is your cancellation policy?
                </h1>
                {/* <RemoveCircleOutlineOutlinedIcon style={{position:"relative",left:"90px",color:" #475467"}} />
                 */}
                              <ControlPointOutlinedIcon style={{ position: "relative", left: "93px", color: " #475467" }}  />
              </div>
                      </div>
                      <hr />
            <div
              style={{
                height: "52px",
                width: "768px",
                gap: "32px",
                // border: "2px solid red",
              }}
            
                      > <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <h1 style={{ fontSize: "18px", fontWeight: "500" ,textAlign:"left",position:"relative",left:"-119px"}}>
                      Can other info be added to an invoice?
                      </h1>
                              {/* <RemoveCircleOutlineOutlinedIcon style={{position:"relative",left:"83px",color:" #475467"}} /> */}
                              <ControlPointOutlinedIcon style={{ position: "relative", left: "86px", color: " #475467" }}  />
                          </div></div>
                      <hr />
            <div
              style={{
                height: "52px",
                width: "768px",
                gap: "32px",
                // border: "2px solid red",
              }}
            > <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "18px", fontWeight: "500" ,textAlign:"left",position:"relative",left:"-141px"}}>
            How does billing work?
            </h1>
                              {/* <RemoveCircleOutlineOutlinedIcon style={{position:"relative",left:"100px",color:" #475467"}} /> */}
                              <ControlPointOutlinedIcon style={{ position: "relative", left: "113px", color: " #475467" }}  />
                          </div></div>
                      <hr />
            <div
              style={{
                height: "52px",
                width: "768px",
                gap: "32px",
                // border: "2px solid red",
              }}
            > <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "18px", fontWeight: "500" ,textAlign:"left",position:"relative",left:"-122px"}}>
            How do I change my account email?
            </h1>
                              {/* <RemoveCircleOutlineOutlinedIcon style={{position:"relative",left:"100px",color:" #475467"}} /> */}
                              <ControlPointOutlinedIcon style={{ position: "relative", left: "90px", color: " #475467" }}  />
          </div></div> <hr />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Faq;

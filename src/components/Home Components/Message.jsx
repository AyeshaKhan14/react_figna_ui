import React, { useState } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsGlobe2, BsThreeDots } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import mssgSty from "../../Style/Message.module.css"
import world from "../../assets/world.png";
import dots from "../../assets/dots.png"
import mssg from "../../assets/mssg.jpg"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"


import {
  Box, Text
} from "@chakra-ui/react";

export const Message = () => {
  const [personal, setPersonal] = useState(false);
  const [message, setMessage] = useState(false);
  const [text, setText] = useState(false);
  const [pop, setPop] = useState(false);

  const data = [
    {
      image: img1,
    name: "Elmer Laverty",
    chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    isReplyOpen: false,
    },
    {
      image: img2,
      name: "Elmer Laverty",
      chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    },
    {
      image: img3,
      name: "Elmer Laverty",
      chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    },
    {
      image: img4,
      name: "Elmer Laverty",
      chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    },
    {
      image: img5,
      name: "Elmer Laverty",
      chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    },
    {
      image: img1,
      name: "Elmer Laverty",
      chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    },
    {
      image: img1,
      name: "Elmer Laverty",
      chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    },
    {
      image: img1,
      name: "Elmer Laverty",
      chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    },
    {
      image: img1,
      name: "Elmer Laverty",
      chat: "Hiii how yor're doing? I hope you are fine boy !!!",
    },
  ];

  const toggleDropdown1 = () => {
    setPersonal(!personal);
  };
  const toggleDropdown2 = (e) => {
    e.stopPropagation();
    setMessage(!message);
  };
  const toggleDropdown3 = (e) => {
    e.stopPropagation();
    setText(!text);
  };
  const toggleDropdown4 = (e) => {
    e.stopPropagation();
    setPop(!pop);
  };

  return (
    <>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          display: personal ? "none" : "block",
        }}
        onClick={toggleDropdown1}
        className={mssgSty.menuIcondiv}
      >
        <div className={mssgSty.innericon}>
          <div style={{ width: "auto", display: "flex", gap: "10px" }}>
            {" "}
            <BsGlobe2 size={20} />
            <BiMessageAltDetail size={20} />
          </div>
          <div className={mssgSty.three_none_dots}>
            <BsThreeDots size={20} />
          </div>
        </div>
      </div>


      {/* working */}
      <div>
        {personal && (
          <div style={{ backgroundColor: "white" }}>
            <div
              onClick={toggleDropdown1}
              className={mssgSty.menuIcondiv_div}
            >
              <div className={mssgSty.innericon_div}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <img className={mssgSty.worldicon} src={world} alt="" />
                  <img className={mssgSty.mssgicon} src={mssg} alt="" />
                </div>

                <div>
                  <img className={mssgSty.dotsssicon} src={dots} alt="" />
                </div>
              </div>
            </div>
            <div className={mssgSty.cont_global}>
              <p className={mssgSty.para_global}> Member Global Chat</p>
            </div>
            <hr color="gray" />
            <div
              className={mssgSty.scrollableDiv}
            >
              {data.map((item, index) => (
                <>
                  <div
                    onClick={toggleDropdown2}
                    style={{ display: "block" }}
                  >
                    <div key={index} className={mssgSty.messagesSection}>
                      {/* Else */}
                      <div className={mssgSty.chatsdiv}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%"
                          }}
                        >
                          {/* Image + Name */}
                          <div className={mssgSty.flextime}>
                            {/* Image */}
                            <div>
                              <img
                                className={mssgSty.imagesize}
                                src={item.image || ""}
                                alt=""
                              />
                            </div>
                            {/* Name */}
                            <div className={mssgSty.nameStyle}>
                              {item.name}
                            </div>
                          </div>

                          {/* Toggle */}
                          <div
                            onClick={toggleDropdown3}
                            className={mssgSty.timeStyle}
                          >
                            <div style={{ position: "relative" }}>
                              {text ? (
                                <BsChevronDown
                                  onClick={toggleDropdown4}
                                  style={{
                                    color: "black",
                                    fontSize: "20px",
                                  }}
                                />
                              ) : (
                                "12m"
                              )}
                              {/* reply */}
                              <div
                                style={{
                                  position: "absolute",
                                  top: "5px",
                                  right: "0px",
                                  color: "black",
                                  zIndex: 10,
                                }}
                                onClick={() => setPop(prev => !prev)}
                              >
                                {pop && (
                                  <>
                                    <div style={{ border: "2px solid silver", borderRadius: "6px", marginTop: "30px", backgroundColor: "white", width: "100px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>Reply</div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={mssgSty.chatss}>
                          <p className={mssgSty.chatStyle}>{item.chat}</p>
                        </div>
                      </div>
                      {/* Message */}
                      <div>
                        {message && (
                          <div className={mssgSty.pop_message}>
                            <Box w={"100%"} mt={2} border="1px solid silver" borderRight={"none"} borderLeft={"none"}>
                              {/* image */}
                              <Box mt={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Box> <img
                                  className={mssgSty.imagesize}
                                  src="data:image/jpeg;base64,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"
                                  alt=""
                                /></Box>
                                <Text as="b">Luis Michael</Text>
                                <Text color="gray">just now</Text>
                              </Box>
                              {/* description */}
                              <Box w={60} m={"auto"}>
                                <Text color="blue" >@abcMiccy</Text>
                                <Text >Hi,this is Elmer here.Good to meet you all</Text>

                                <Text>Hi,Elmer Welcom</Text>
                              </Box>
                            </Box>
                          </div>
                        )}{" "}
                      </div>
                    </div>
                    {/* <div>hii</div> */}
                  </div>
                  <hr color="gray" style={{ width: "100%" }} />
                </>
              ))}
            </div>
            <div
              className={`${mssgSty.nonScrollableContainer} ${mssgSty.message_cont_box}`}
            >
              <div className={mssgSty.sceny_icon}>
                <div>
                  <AiOutlineSmile className={mssgSty.icon_simle} />
                </div>
                <div>
                  <BsFillImageFill />
                </div>
                <p>Type your message</p>
              </div>
              <div>
                <BsFillSendFill className={mssgSty.icon_img} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Input,Button,useDisclosure,Box,Text
  } from '@chakra-ui/react'
  import  { useState } from "react";
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
import replyUser from "../../assets/replyUser.png"
import {AiOutlineMessage} from "react-icons/ai"
export const Drawers = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
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
      <AiOutlineMessage ref={btnRef} colorScheme='teal' onClick={onOpen} style={{color:"#00808B" ,fontSize:"24px" }}  />
          <Drawer 
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          className={mssgSty.drawerss}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Member Global Chat</DrawerHeader>

          <DrawerBody>
          <div style={{ backgroundColor: "white" }}>
            <div
            //   onClick={toggleDropdown1}
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
            {/* <div className={mssgSty.cont_global}>
              <p className={mssgSty.para_global}> Member Global Chat</p>
            </div> */}
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
                                  src={replyUser}                                  alt=""
                                /></Box>
                                <Text as="b">Luis Michael</Text>
                                <Text color="gray">just now</Text>
                              </Box>
                              {/* description */}
                              <Box className={mssgSty.desc_div}>
                                <vr/>
                                <Text className={mssgSty.michalhead} >@abcMiccy</Text>
                                <Text className={mssgSty.meetpara} >Hi,this is Elmer here.Good to meet you all</Text>

                                <Text className={mssgSty.wellpara}>Hi,Elmer Welcom</Text>
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
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>

    </>
  )
}

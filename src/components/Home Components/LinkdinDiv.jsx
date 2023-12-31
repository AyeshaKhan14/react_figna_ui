import React, { useState } from "react";
import { data } from "./data.js";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { GoPaperAirplane } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import linkStyle from "../../Style/LinkdinDiv.module.css";
import { Text } from "@chakra-ui/react";
import { BiHide } from "react-icons/bi";
import { TbMessageReport } from "react-icons/tb";
import { RiUserUnfollowLine } from "react-icons/ri";
import { useDisclosure } from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { FaSlideshare } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { BiSolidHide } from "react-icons/bi";
import person from "../../assets/person.png";
import heart from "../../assets/heart.png";
import whiteheart from "../../assets/LikeHd.png";
import share from "../../assets/shareHD.png";
import comment from "../../assets/commentHD.png";
import user from "../../assets/userHD.jpg";
import send from "../../assets/sendHD.png";
import share1 from "../../assets/share1.jpg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import {
  Popover,
  Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  Input,
  InputGroup,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  Button,
  InputLeftElement,
  Image,
  Stack,
} from "@chakra-ui/react";

const LinkdinDiv = () => {
  const {
    isOpen: isThreeDotsOpen,
    onOpen: onThreeDotsOpen,
    onClose: onThreeDotsClose,
  } = useDisclosure();
  const {
    isOpen: isHidePostModalOpen,
    onOpen: onHidePostModalOpen,
    onClose: onHidePostModalClose,
  } = useDisclosure();
  const {
    isOpen: isReportModalOpen,
    onOpen: onReportModalOpen,
    onClose: onReportModalClose,
  } = useDisclosure();
  const {
    isOpen: isUnfollowModalOpen,
    onOpen: onUnfollowModalOpen,
    onClose: onUnfollowModalClose,
  } = useDisclosure();
  const {
    isOpen: isShareModalOpen,
    onOpen: onShareModalOpen,
    onClose: onShareModalClose,
  } = useDisclosure();
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [button3Clicked, setButton3Clicked] = useState(false);
  const [button4Clicked, setButton4Clicked] = useState(false);
  const [button5Clicked, setButton5Clicked] = useState(false);
  const [button6Clicked, setButton6Clicked] = useState(false);
  const [button7Clicked, setButton7Clicked] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1Clicked((prevValue) => !prevValue);
    } else if (buttonNumber === 2) {
      setButton2Clicked((prevValue) => !prevValue);
    } else if (buttonNumber === 3) {
      setButton3Clicked((prevValue) => !prevValue);
    } else if (buttonNumber === 4) {
      setButton4Clicked((prevValue) => !prevValue);
    } else if (buttonNumber === 5) {
      setButton5Clicked((prevValue) => !prevValue);
    } else if (buttonNumber === 6) {
      setButton6Clicked((prevValue) => !prevValue);
    } else if (buttonNumber === 7) {
      setButton7Clicked((prevValue) => !prevValue);
    }
  };

  return (
    <>
      <div className={linkStyle.link_container}>
        <div className={linkStyle.innerdiv_link}>
          <div className={linkStyle.whole_cont}>
            <div className={linkStyle.avtar_div}>
              <div className={linkStyle.flex_cont_avatr}>
                <div className={linkStyle.class_avatar}>
                  <div className={linkStyle.class_avatar_image}>
                    <img
                      className={linkStyle.boder_image_radius}
                      src={data.image}
                    />
                  </div>
                </div>
                <div className={linkStyle.text_div}>
                  <Text className={linkStyle.heading_name}>{data.name}</Text>
                  <Text className={linkStyle.hrs_heading}>{data.info}</Text>
                </div>
              </div>
            </div>
            <div>
              <Popover>
                <PopoverTrigger>
                  <Box onClick={onThreeDotsOpen}>
                    <BsThreeDots size={30} style={{ cursor: "pointer" }} />
                  </Box>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent w={44}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>
                      <Box
                        display='flex'
                        gap={4}
                        alignItems='center'
                        onClick={onHidePostModalOpen} // Open the Hide Post modal
                      >
                        <BiHide style={{ fontSize: "30px" }} /> Hide Post
                      </Box>
                    </PopoverHeader>
                    <PopoverHeader>
                      <Box
                        display={"flex"}
                        gap={4}
                        alignItems={"center"}
                        onClick={onReportModalOpen}
                      >
                        <TbMessageReport style={{ fontSize: "30px" }} />
                        Report Post
                      </Box>
                    </PopoverHeader>
                    <PopoverHeader>
                      {/* Report Post Modal */}

                      {
                        <Modal
                          isOpen={isReportModalOpen}
                          onClose={onReportModalClose}
                        >
                          <ModalOverlay />
                          <ModalContent mt={36}>
                            <ModalHeader>
                              <Text as='b' textAlign='center'>
                                Report an Issue
                              </Text>
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <Box>
                                <Stack>
                                  <Radio
                                    size='md'
                                    name='1'
                                    colorScheme='blue'
                                    defaultChecked
                                  >
                                    It's spam
                                  </Radio>
                                  <Radio size='md' name='1' colorScheme='green'>
                                    False Information
                                  </Radio>
                                  <Radio size='md' name='1'>
                                    Not interested in this
                                  </Radio>
                                </Stack>
                              </Box>
                            </ModalBody>
                            <ModalFooter>
                              <Box
                                w={"70%"}
                                m={"auto"}
                                display='flex'
                                gap={8}
                                mt={4}
                              >
                                <Button
                                  className={linkStyle.cancelp}
                                  border='1px solid silver'
                                  colorScheme='white'
                                  mr={3}
                                  color='black'
                                  fontWeight='bold'
                                  fontSize='18px'
                                  p={5}
                                  onClick={onReportModalClose}
                                >
                                  cancel
                                </Button>
                                <Button
                                  className={linkStyle.unflp}
                                  border='1px solid red'
                                  colorScheme='white'
                                  mr={3}
                                  color='red'
                                  p={5}
                                  fontWeight='bold'
                                  fontSize='18px'
                                >
                                  Report
                                </Button>
                              </Box>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      }

                      {/* Hide Post Modal */}

                      {
                        <Modal
                          isOpen={isHidePostModalOpen}
                          onClose={onHidePostModalClose}
                        >
                          <ModalOverlay />
                          <ModalContent bg='black' mt={56}>
                            <ModalCloseButton />
                            <ModalBody>
                              <Box w={"95"} m={"auto"} display='flex' gap={6}>
                                <Box>
                                  <BiSolidHide style={{ fontSize: "30px" }} />
                                </Box>
                                <Box>
                                  <Text color='gray.600'>Post Hidden</Text>
                                  <Text color='gray.600'>
                                    You wont see this post on your timeline
                                  </Text>
                                </Box>
                              </Box>
                            </ModalBody>
                          </ModalContent>
                        </Modal>
                      }

                      <Box
                        display={"flex"}
                        gap={4}
                        cursor='pointer'
                        alignItems={"center"}
                        onClick={onUnfollowModalOpen}
                      >
                        <RiUserUnfollowLine style={{ fontSize: "30px" }} />
                        Unfollow
                      </Box>
                    </PopoverHeader>
                  </PopoverContent>

                  {/* Unfollow Modal */}
                  <Modal
                    isOpen={isUnfollowModalOpen}
                    onClose={onUnfollowModalClose}
                  >
                    <ModalOverlay />
                    <ModalContent mt={40}>
                      <Text mt={10} className={linkStyle.hamunpata}>
                        unfollow @hamzaanjum
                      </Text>
                      <ModalCloseButton />
                      <ModalBody>
                        <Box w={48} m={"auto"}>
                          <Text className={linkStyle.unflw_para}>
                            Their posts will no longer show up in your feed
                          </Text>
                        </Box>
                      </ModalBody>
                      <ModalFooter>
                        <Box w={"70%"} m={"auto"} display='flex' gap={8}>
                          <Button
                            className={linkStyle.cancelp}
                            border='1px solid silver'
                            colorScheme='white'
                            mr={3}
                            color='black'
                            fontWeight='bold'
                            fontSize='18px'
                            p={5}
                            onClick={onUnfollowModalClose}
                          >
                            Cancel
                          </Button>
                          <Button
                            className={linkStyle.unflp}
                            colorScheme='white'
                            mr={3}
                            border='1px solid red'
                            color='red'
                            p={5}
                            fontWeight='bold'
                            fontSize='18px'
                          >
                            Unfollow
                          </Button>
                        </Box>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Portal>
              </Popover>
            </div>
          </div>
          <div className={linkStyle.main_big_image}>
            <img src={person} />
          </div>
          <div className={linkStyle.loreum_cont}>
            <h4 className={linkStyle.detal_cont}>{data.detail}</h4>
          </div>

          {/* heart commt div */}
          <div className={linkStyle.like_cokmmt_div}>
            <div className={linkStyle.heattt}>
              <img src={heart} alt='' /> 2.4k
            </div>
            <div className={linkStyle.comment}>
              <div className={linkStyle.cmmtthree}>3 comments</div>
              <div className={linkStyle.shareone}>1 share</div>
            </div>
          </div>

          <div className={linkStyle.share_cokmmt_div}>
            <div className={linkStyle.like_div}>
              <img src={whiteheart} alt='' /> <p>Like</p>
            </div>

            <div className={linkStyle.commt_div}>
              <img src={comment} alt='' /> <p>Comment</p>
            </div>

            <div className={linkStyle.share_div}>
              <Popover>
                <img src={share} alt='' />

                <PopoverTrigger>
                  <Text cursor='pointer'>Share</Text>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent w={72}>
                    <PopoverArrow />
                    <PopoverHeader>
                      <Box
                        display={"flex"}
                        gap={4}
                        cursor={"pointer"}
                        alignItems={"center"}
                        onClick={onShareModalOpen}
                      >
                        <FaShare style={{ fontSize: "30px" }} />
                        Share now
                      </Box>
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverHeader>
                      <Box
                        display={"flex"}
                        gap={4}
                        cursor={"pointer"}
                        alignItems={"center"}
                        onClick={onShareModalOpen}
                      >
                        <FaShareSquare style={{ fontSize: "30px" }} />
                        Share to feed
                      </Box>
                    </PopoverHeader>

                    <PopoverHeader>
                      {" "}
                      <Box
                        display={"flex"}
                        cursor={"pointer"}
                        gap={4}
                        alignItems={"center"}
                        onClick={onShareModalOpen}
                      >
                        <FaSlideshare style={{ fontSize: "30px" }} />
                        Share to friends
                      </Box>
                    </PopoverHeader>
                  </PopoverContent>
                  {/* share modal */}

                  {
                    <Modal
                      isOpen={isShareModalOpen}
                      onClose={onShareModalClose}
                    >
                      <ModalOverlay />
                      <ModalContent className={linkStyle.modalContent_share}>
                        <ModalHeader className={linkStyle.senddd}>
                          Send to
                        </ModalHeader>
                        <ModalCloseButton _focus={{ boxShadow: "none" }} />
                        <ModalBody
                          className={linkStyle.modal_share}
                          h={"auto"}
                          mb={10}
                        >
                          <Box>
                            <InputGroup className={linkStyle.input_chakra}>
                              <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='black' />}
                              />
                              <Input
                                htmlSize={4}
                                width='644px'
                                placeholder='Search'
                              />
                            </InputGroup>
                          </Box>
                          {/* box -1 */}

                          <Box w={"100%"} m={"auto"} h={32}>
                            {" "}
                            <Box
                              w={"100%"}
                              m={"auto"}
                              display='flex'
                              alignItems='center'
                              justifyContent='space-between'
                              gap={54}
                              borderTop={"none"}
                              borderRight={"none"}
                              borderLeft={"none"}
                              border={"1px solid #D1D1D1;"}
                            >
                              <Box className={linkStyle.box_share}>
                                <Box
                                  w={"auto"}
                                  h={"100%"}
                                  display='flex'
                                  gap={4}
                                  alignItems='center'
                                >
                                  <Box
                                    w='40px'
                                    h='40px'
                                    borderRadius='50%'
                                    bg='blue'
                                  >
                                    <Image
                                      w={"100%"}
                                      height={"100%"}
                                      borderRadius={"50%"}
                                      src={share1}
                                      alt='Dan Abramov'
                                    />
                                  </Box>
                                  <Box>
                                    <Text
                                      fontSize='14px'
                                      fontWeight='700'
                                      lineHeight={"normal"}
                                      fontStyle={"normal"}
                                    >
                                      Lorem Ipsum
                                    </Text>
                                    <Text
                                      fontSize='12px'
                                      color='#465D61'
                                      fontWeight={"400"}
                                      fontStyle={"normal"}
                                      lineHeight={"20px"}
                                    >
                                      UI/UX Designer
                                    </Text>
                                  </Box>
                                </Box>
                              </Box>
                              <Box>
                                <Button
                                  className={`${linkStyle["teal-button"]} ${
                                    button1Clicked
                                      ? linkStyle["black-button"]
                                      : ""
                                  }`}
                                  // mr={3}
                                  w={32}
                                  borderRadius='50'
                                  h={10}
                                  color={"white"}
                                  onClick={() => handleButtonClick(1)}
                                  style={{
                                    backgroundColor: button1Clicked
                                      ? "black"
                                      : "teal",
                                  }}
                                >
                                  {button1Clicked ? "Sent" : "Send"}
                                </Button>
                              </Box>
                            </Box>
                          </Box>

                          {/* box-2 */}
                          <Box
                            w={"100%"}
                            m={"auto"}
                            mt={4}
                            display='flex'
                            alignItems='center'
                            justifyContent='space-between'
                          >
                            <Box>
                              <Box
                                w={"auto"}
                                h={"100%"}
                                display='flex'
                                gap={4}
                                alignItems='center'
                              >
                                <Box
                                  w='40px'
                                  h='40px'
                                  borderRadius='50%'
                                  bg='blue'
                                >
                                  <Image
                                    w={"100%"}
                                    height={"100%"}
                                    borderRadius={"50%"}
                                    src='https://bit.ly/dan-abramov'
                                    alt='Dan Abramov'
                                  />
                                </Box>
                                <Box>
                                  <Text
                                    fontSize='14px'
                                    fontWeight='700'
                                    lineHeight={"normal"}
                                    fontStyle={"normal"}
                                  >
                                    Lorem Ipsum
                                  </Text>
                                  <Text
                                    fontSize='12px'
                                    color='#465D61'
                                    fontWeight={"400"}
                                    fontStyle={"normal"}
                                    lineHeight={"20px"}
                                  >
                                    UI/UX Designer
                                  </Text>
                                </Box>
                              </Box>
                            </Box>
                            <Box>
                              <Button
                                className={`${linkStyle["teal-button"]} ${
                                  button2Clicked === true
                                    ? linkStyle["black-button"]
                                    : ""
                                }`}
                                // mr={3}
                                w={32}
                                borderRadius='50'
                                h={10}
                                color={"white"}
                                onClick={() => handleButtonClick(2)}
                                style={{
                                  backgroundColor: button2Clicked
                                    ? "black"
                                    : "teal",
                                }}
                              >
                                {button2Clicked ? "Sent" : "Send"}
                              </Button>
                            </Box>
                          </Box>

                          {/* box-3 */}
                          <Box
                            w={"100%"}
                            m={"auto"}
                            mt={4}
                            display='flex'
                            alignItems='center'
                            justifyContent='space-between'
                          >
                            <Box>
                              <Box
                                w={"auto"}
                                h={"100%"}
                                display='flex'
                                gap={4}
                                alignItems='center'
                              >
                                <Box
                                  w='40px'
                                  h='40px'
                                  borderRadius='50%'
                                  bg='blue'
                                >
                                  <Image
                                    w={"100%"}
                                    height={"100%"}
                                    borderRadius={"50%"}
                                    src='https://bit.ly/dan-abramov'
                                    alt='Dan Abramov'
                                  />
                                </Box>
                                <Box>
                                  <Text
                                    fontSize='14px'
                                    fontWeight='700'
                                    lineHeight={"normal"}
                                    fontStyle={"normal"}
                                  >
                                    Lorem Ipsum
                                  </Text>
                                  <Text
                                    fontSize='12px'
                                    color='#465D61'
                                    fontWeight={"400"}
                                    fontStyle={"normal"}
                                    lineHeight={"20px"}
                                  >
                                    UI/UX Designer
                                  </Text>
                                </Box>
                              </Box>
                            </Box>
                            <Box>
                              <Button
                                className={`${linkStyle["teal-button"]} ${
                                  button3Clicked
                                    ? linkStyle["black-button"]
                                    : ""
                                }`}
                                // mr={3}
                                w={32}
                                borderRadius='50'
                                h={10}
                                color={"white"}
                                onClick={() => handleButtonClick(3)}
                                style={{
                                  backgroundColor:
                                    button3Clicked === true ? "black" : "teal",
                                }}
                              >
                                {button3Clicked ? "Sent" : "Send"}
                              </Button>
                            </Box>
                          </Box>

                          {/* box-4 */}
                          <Box
                            w={"100%"}
                            m={"auto"}
                            mt={4}
                            display='flex'
                            alignItems='center'
                            justifyContent='space-between'
                          >
                            <Box>
                              <Box
                                w={"auto"}
                                h={"100%"}
                                display='flex'
                                gap={4}
                                alignItems='center'
                              >
                                <Box
                                  w='40px'
                                  h='40px'
                                  borderRadius='50%'
                                  bg='blue'
                                >
                                  <Image
                                    w={"100%"}
                                    height={"100%"}
                                    borderRadius={"50%"}
                                    src='https://bit.ly/dan-abramov'
                                    alt='Dan Abramov'
                                  />
                                </Box>
                                <Box>
                                  <Text
                                    fontSize='14px'
                                    fontWeight='700'
                                    lineHeight={"normal"}
                                    fontStyle={"normal"}
                                  >
                                    Lorem Ipsum
                                  </Text>
                                  <Text
                                    fontSize='12px'
                                    color='#465D61'
                                    fontWeight={"400"}
                                    fontStyle={"normal"}
                                    lineHeight={"20px"}
                                  >
                                    UI/UX Designer
                                  </Text>
                                </Box>
                              </Box>
                            </Box>
                            <Box>
                              <Button
                                className={`${linkStyle["teal-button"]} ${
                                  button4Clicked === true
                                    ? linkStyle["black-button"]
                                    : ""
                                }`}
                                // mr={3}
                                w={32}
                                borderRadius='50'
                                h={10}
                                color={"white"}
                                onClick={() => handleButtonClick(4)}
                                style={{
                                  backgroundColor: button4Clicked
                                    ? "black"
                                    : "teal",
                                }}
                              >
                                {button4Clicked ? "Sent" : "Send"}
                              </Button>
                            </Box>
                          </Box>

                          {/* box-5 */}
                          <Box
                            w={"100%"}
                            m={"auto"}
                            mt={4}
                            display='flex'
                            alignItems='center'
                            justifyContent='space-between'
                          >
                            <Box
                              w={"auto"}
                              h={"100%"}
                              display='flex'
                              gap={4}
                              alignItems='center'
                            >
                              <Box
                                w='40px'
                                h='40px'
                                borderRadius='50%'
                                bg='blue'
                              >
                                <Image
                                  w={"100%"}
                                  height={"100%"}
                                  borderRadius={"50%"}
                                  src='https://bit.ly/dan-abramov'
                                  alt='Dan Abramov'
                                />
                              </Box>
                              <Box>
                                <Text
                                  fontSize='14px'
                                  fontWeight='700'
                                  lineHeight={"normal"}
                                  fontStyle={"normal"}
                                >
                                  Lorem Ipsum
                                </Text>
                                <Text
                                  fontSize='12px'
                                  color='#465D61'
                                  fontWeight={"400"}
                                  fontStyle={"normal"}
                                  lineHeight={"20px"}
                                >
                                  UI/UX Designer
                                </Text>
                              </Box>
                            </Box>
                            <Box>
                              <Button
                                className={`${linkStyle["teal-button"]} ${
                                  button5Clicked
                                    ? linkStyle["black-button"]
                                    : ""
                                }`}
                                // mr={3}
                                w={32}
                                borderRadius='50'
                                h={10}
                                color={"white"}
                                onClick={() => handleButtonClick(5)}
                                style={{
                                  backgroundColor: button5Clicked
                                    ? "black"
                                    : "teal",
                                }}
                              >
                                {button5Clicked ? "Sent" : "Send"}
                              </Button>
                            </Box>
                          </Box>

                          {/* box-6 */}
                          <Box
                            w={"100%"}
                            m={"auto"}
                            mt={4}
                            display='flex'
                            alignItems='center'
                            justifyContent='space-between'
                          >
                            <Box
                              w={"auto"}
                              h={"100%"}
                              display='flex'
                              gap={4}
                              alignItems='center'
                            >
                              <Box
                                w='40px'
                                h='40px'
                                borderRadius='50%'
                                bg='blue'
                              >
                                <Image
                                  w={"100%"}
                                  height={"100%"}
                                  borderRadius={"50%"}
                                  src='https://bit.ly/dan-abramov'
                                  alt='Dan Abramov'
                                />
                              </Box>
                              <Box>
                                <Text
                                  fontSize='14px'
                                  fontWeight='700'
                                  lineHeight={"normal"}
                                  fontStyle={"normal"}
                                >
                                  Lorem Ipsum
                                </Text>
                                <Text
                                  fontSize='12px'
                                  color='#465D61'
                                  fontWeight={"400"}
                                  fontStyle={"normal"}
                                  lineHeight={"20px"}
                                >
                                  UI/UX Designer
                                </Text>
                              </Box>
                            </Box>
                            <Box>
                              <Button
                                className={`${linkStyle["teal-button"]} ${
                                  button6Clicked
                                    ? linkStyle["black-button"]
                                    : ""
                                }`}
                                // mr={3}
                                w={32}
                                borderRadius='50'
                                h={10}
                                color={"white"}
                                onClick={() => handleButtonClick(6)}
                                style={{
                                  backgroundColor: button6Clicked
                                    ? "black"
                                    : "teal",
                                }}
                              >
                                {button6Clicked ? "Sent" : "Send"}
                              </Button>
                            </Box>
                          </Box>

                          {/* box-7 */}
                          <Box
                            w={"100%"}
                            m={"auto"}
                            mt={4}
                            display='flex'
                            alignItems='center'
                            justifyContent='space-between'
                          >
                            <Box
                              w={"auto"}
                              h={"100%"}
                              display='flex'
                              gap={4}
                              alignItems='center'
                            >
                              <Box
                                w='40px'
                                h='40px'
                                borderRadius='50%'
                                bg='blue'
                              >
                                <Image
                                  w={"100%"}
                                  height={"100%"}
                                  borderRadius={"50%"}
                                  src='https://bit.ly/dan-abramov'
                                  alt='Dan Abramov'
                                />
                              </Box>
                              <Box>
                                <Text
                                  fontSize='14px'
                                  fontWeight='700'
                                  lineHeight={"normal"}
                                  fontStyle={"normal"}
                                >
                                  Lorem Ipsum
                                </Text>
                                <Text
                                  fontSize='12px'
                                  color='#465D61'
                                  fontWeight={"400"}
                                  fontStyle={"normal"}
                                  lineHeight={"20px"}
                                >
                                  UI/UX Designer
                                </Text>
                              </Box>
                            </Box>
                            <Box>
                              <Button
                                className={`${linkStyle["teal-button"]} ${
                                  button7Clicked
                                    ? linkStyle["black-button"]
                                    : ""
                                }`}
                                // mr={3}
                                w={32}
                                borderRadius='50'
                                h={10}
                                color={"white"}
                                onClick={() => handleButtonClick(7)}
                                style={{
                                  backgroundColor: button7Clicked
                                    ? "black"
                                    : "teal",
                                }}
                              >
                                {button7Clicked ? "Sent" : "Send"}
                              </Button>
                            </Box>
                          </Box>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  }
                </Portal>
              </Popover>
            </div>
          </div>

          <div className={linkStyle.post_last_div}>
            <div className={linkStyle.user_icon_div}>
              <img src={user} alt='' />
            </div>

            <div className={linkStyle.div_comment_section}>
              <input type='text' placeholder='write a comment' />
            </div>

            <div className={linkStyle.div_send_section}>
              <img src={send} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkdinDiv;

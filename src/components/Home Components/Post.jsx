import React from 'react'
import posts from "../../Style/Post.module.css"
import user from "../../assets/user.jpg"
import image from "../../assets/Image.png"
import vedio from "../../assets/Video.png"
import {
  Modal,
  ModalOverlay,
  ModalContent,
Text,  ModalFooter,
  ModalBody,Box,Button,
  ModalCloseButton,useDisclosure
} from '@chakra-ui/react'
import {TiTick} from "react-icons/ti"
import LinkdinDiv from './LinkdinDiv'

export const Post = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <div className={posts.fedd_cont_section2}>

    <div className={posts.post_msgg_div}>

     <div className={posts.mindpic_cont}>
      <div className={posts.div1_post}>
          <div className={posts.div_image_cont}>
                <img  className={posts.div_image_cont} src={user}/>
          </div>
          <p className={posts.mind_para}>What's on your mind?</p>
      </div>
      </div>

        <div className={posts.seprateLine}></div>

      <div className={posts.div3_post}> 
      <div className={posts.photo_div}>
      <div className={posts.ggg}>  
        <img src={image} alt="" className={posts.icon_pic}/>
        <p className={posts.addphotopara}>Add photo</p> 
       </div>
       <div  className={posts.ggg}><img src={vedio} className={posts.icon_pic} alt="" />
       <p className={posts.addphotopara}>  Add Video</p>
        </div>
      </div>
     
       <div className={posts.postbutn} onClick={onOpen}>Post</div>
       </div>
       { <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent mt={52} >
      <ModalCloseButton />
      <ModalBody mb={16}>
      <Box w="16" h="16" m="auto" borderRadius="50%" bg={"teal"} borderWidth="1px" display="flex" alignItems="center" justifyContent="center" mt={10}>
          <TiTick className={posts.modal_icon}/></Box>
          <Text textAlign="center" mt={2} fontWeight={"bold"}>Post Shared</Text>
          <Text textAlign={"center"}mt={2} >Post Shared on your profile</Text>

      </ModalBody>
    </ModalContent>
  </Modal>}
    </div>



      <LinkdinDiv/>
  </div>

  )
}

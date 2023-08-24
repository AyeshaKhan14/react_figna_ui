import React from 'react'
import ban from "../../Style/Banner.module.css"
import user from "../../assets/user.jpg"
import banner from "../../assets/Banner.png"

export const Banner = () => {
  return (
    <div className={ban.user_profile_cont}>
    <div >
      <img src={banner} alt="" />
    </div>
  
    <div className={ban.user_content_div}>
        <div className={ban.two}>
          <img src={user} alt="" />
        </div>
        <div className={ban.div_three}>
          <h4 style={{fontWeight:"bold"}}>Hamza Anjum</h4>
          <p>UI/UX Designer </p>
          <p className={ban.para}>Creative Studio PK</p>
      </div>
  
        <div className={ban.horizental_line}></div>
  
      <div className={ban.followrs_div}>
        <div className={ban.h5div}>
          <h5>1.6K</h5>
          <p className={ban.follwer_para}>Followers</p>
        </div>
        <div className={ban.h5div}>
          <h5>900</h5>
          <p className={ban.follwer_para}>Following</p>
        </div>
      </div>
       </div>
  </div>
  
  )
}

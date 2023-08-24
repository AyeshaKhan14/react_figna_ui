import React from 'react'
import searchStyle from "../../Style/SearchBox.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotificationsNone} from "react-icons/md"
import user from "../../assets/user.jpg"

import {
 Box,Text,Image
} from '@chakra-ui/react'
import chartgreen from "../../assets/Chart.png"
import {
 useDisclosure
} from '@chakra-ui/react'
import { Drawers } from './Drawer'

export const SearchBox = () => {


  return (
    <>
           {/* sesrch section */}
      <div className={searchStyle.continer_seacrh_box}>
        <div className={searchStyle.new_search_div}>
            <div className={searchStyle.search_queiry_box}>
              <span className={searchStyle.search_icons}><AiOutlineSearch/></span>
              <div className={searchStyle.seach_div_text}>Search</div>
            </div>
       
        <div className={searchStyle.icons_notid_div}>
            <div className={searchStyle.notification_div}><span ><MdNotificationsNone className={searchStyle.notif_icons}/></span></div>
            <div  className={searchStyle.single_line_div}></div>
            <div className={searchStyle.userss_icons}><img src={user} alt="user" /></div>
            <div className={searchStyle.mssgBar}>
             
               <Drawers/>
               </div>
        </div>
        </div>
      </div>

      {/* grid section */}
      <div className={searchStyle.grid_section_div}>

            {/* box-1-chart */}
          <div className={searchStyle.chart_div1}>
           <div className={searchStyle.chart_inner}>

            <div className={searchStyle.errdd_para}>
              <p className={searchStyle.erudd} >EURUDD</p>
              <p className={searchStyle.numberpara}>78.89</p>
              <p className={searchStyle.redpara}>-0.8%</p>
            </div>
           
            <div>
           <img  className={searchStyle.chart_img} src={chartgreen} alt="" />
            </div>
            </div> 
       </div>

            {/* box-2-chart */}
            <div className={searchStyle.chart_div1}>
           <div className={searchStyle.chart_inner}>

            <div className={searchStyle.errdd_para}>
              <p className={searchStyle.erudd} >EURUDD</p>
              <p className={searchStyle.numberpara}>78.89</p>
              <p className={searchStyle.redpara}>-0.8%</p>
            </div>
           
            <div>
           <img  className={searchStyle.chart_img} src={chartgreen} alt="" />
            </div>
            </div> 
       </div>

            {/* box-3-chart */}
            <div className={searchStyle.chart_div1}>
           <div className={searchStyle.chart_inner}>

            <div className={searchStyle.errdd_para}>
              <p className={searchStyle.erudd} >EURUDD</p>
              <p className={searchStyle.numberpara}>78.89</p>
              <p className={searchStyle.redpara}>-0.8%</p>
            </div>
           
            <div>
           <img  className={searchStyle.chart_img} src={chartgreen} alt="" />
            </div>
            </div> 
       </div>


                 {/* box-4-chart */}
          <div className={searchStyle.chart_div1}>
           <div className={searchStyle.chart_inner}>

            <div className={searchStyle.errdd_para}>
              <p className={searchStyle.erudd} >EURUDD</p>
              <p className={searchStyle.numberpara}>78.89</p>
              <p className={searchStyle.redpara}>-0.8%</p>
            </div>
           
            <div>
           <img  className={searchStyle.chart_img} src={chartgreen} alt="" />
            </div>
            </div> 
       </div>



               {/* box-5-chart */}
               <div className={searchStyle.chart_div1}>
           <div className={searchStyle.chart_inner}>

            <div className={searchStyle.errdd_para}>
              <p className={searchStyle.erudd} >EURUDD</p>
              <p className={searchStyle.numberpara}>78.89</p>
              <p className={searchStyle.redpara}>-0.8%</p>
            </div>
           
            <div>
           <img  className={searchStyle.chart_img} src={chartgreen} alt="" />
            </div>
            </div> 
       </div>
 
                {/* box-6-chart */}
          <div className={searchStyle.chart_div1}>
           <div className={searchStyle.chart_inner}>

            <div className={searchStyle.errdd_para}>
              <p className={searchStyle.erudd} >EURUDD</p>
              <p className={searchStyle.numberpara}>78.89</p>
              <p className={searchStyle.redpara}>-0.8%</p>
            </div>
           
            <div>
           <img  className={searchStyle.chart_img} src={chartgreen} alt="" />
            </div>
            </div> 
       </div>

            {/* box-7-chart */}
            <div className={searchStyle.chart_div1}>
           <div className={searchStyle.chart_inner}>

            <div className={searchStyle.errdd_para}>
              <p className={searchStyle.erudd} >EURUDD</p>
              <p className={searchStyle.numberpara}>78.89</p>
              <p className={searchStyle.redpara}>-0.8%</p>
            </div>
           
            <div>
           <img  className={searchStyle.chart_img} src={chartgreen} alt="" />
            </div>
            </div> 
       </div>

</div>
    </>
  
  )
}

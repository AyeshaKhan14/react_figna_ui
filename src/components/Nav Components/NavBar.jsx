import React from "react";
import searchStyle from "../../Style/SearchBox.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import user from "../../assets/user.jpg";
import chartgreen from "../../assets/Chart.png";
import redchart from "../../assets/redchart.png";
import { Drawers } from "../Home Components/Drawer";

export const NavBar = () => {
  return (
    <>
      <div className={searchStyle.continer_seacrh_box}>
        <div></div>
        <div className={searchStyle.new_search_div}>
          <div className={searchStyle.search_queiry_box}>
            <span className={searchStyle.search_icons}>
              <AiOutlineSearch />
            </span>
            <div className={searchStyle.seach_div_text}>
              <input type='text' placeholder='Search' />
            </div>
          </div>
        </div>

        {/* icons */}
        <div className={searchStyle.icons_notid_div}>
          <div className={searchStyle.notification_div}>
            <span>
              <MdNotificationsNone className={searchStyle.notif_icons} />
            </span>
          </div>
          <div className={searchStyle.single_line_div}></div>
          <div className={searchStyle.userss_icons}>
            <img src={user} alt='user' />
          </div>
          <div className={searchStyle.mssgBar}>
            <Drawers />
          </div>
        </div>
      </div>
    </>
  );
};

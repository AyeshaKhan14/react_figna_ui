import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import user from "../../assets/user.jpg";
import { Drawers } from "../Home Components/Drawer";
import Style from "./navbar.module.css";

const Navbar = () => {
	return (
		<div className={Style.nav_container}>
			{/* Empty div for equal seperation */}
			<div className='emp' />

			{/* Search Box */}
			<div className={Style.search_box}>
				<span className={Style.search_icon}>
					<AiOutlineSearch />
				</span>
				<input
					className={Style.search_input}
					type='text'
					placeholder='Search'
				/>
			</div>

			{/* Notification + Profile */}
			<div className={Style.notification_container}>
				<div className={Style.notification_icon}>
					<MdNotificationsNone className={Style.notif_icons} />
				</div>

				<div className={Style.mssgBar}>
					<Drawers />
				</div>
				<div className={Style.line_divider} />
				<div className={Style.user_avatar}>
					<img src={user} alt='user' className={Style.user_avatar_img} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;

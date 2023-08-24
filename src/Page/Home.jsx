import React from 'react'
import homeStyle from "../Style/Home.module.css"
import { SideBar } from '../components/SideBar Components/SideBar'
import { Main } from '../components/Home Components/Main'

export const Home = () => {
  return (
    <div className={homeStyle.home_container}>
        <div className={homeStyle.sidebar_container}>
             <SideBar />
             </div>
        <div className={homeStyle.main_home_container}>
            <Main/>
        </div>
    </div>
  )
}

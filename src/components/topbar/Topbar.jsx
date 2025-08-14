import { useState } from "react";
import Profile from "../../pages/profile/Profile";
import "./topbar.css"

import {Search,Person,Chat,Notifications} from "@mui/icons-material";

export default function Topbar() 
{

  return (
    <div class="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">MySocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="seachIcon"/>

                <input placeholder="Search bar for friends, post or video" className="serchInput" />
             </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>



          <div className="topbarIcons">
          <div className="topbarIconsItems">
              <Person/>
              <span className="topbarIconBadge">1</span>
               </div>

              <div className="topbarIconsItems">
              <Chat/>
              <span className="topbarIconBadge">2</span>
                  </div>

              <div className="topbarIconsItems">
              <Notifications/>
              <span className="topbarIconBadge" >1</span>
          </div>
        
        </div>
        </div>

        <img src="/assest/persons/p11.jpg"  alt="" className="topbarImage" />
    </div>
  )
  
}



import "./sidebar.css"
import { RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from "@mui/icons-material"
import CloseFriend from "../closeFriend/CloseFriend"
import {Users} from "../../DummyData"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

           <li className="sidebarListItems">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">chats</span>
          </li>

           <li className="sidebarListItems">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>

           <li className="sidebarListItems">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>

           <li className="sidebarListItems">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

           <li className="sidebarListItems">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>

           <li className="sidebarListItems">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

           <li className="sidebarListItems">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>

           <li className="sidebarListItems">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarBtn">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
            
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
  </ul>
      </div>
      </div>
  )
}

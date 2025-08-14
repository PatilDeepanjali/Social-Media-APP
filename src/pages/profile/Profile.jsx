import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Right'


export default function Profile() {
  return (
      <>
        <Topbar/>
        
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profilrCover">
              <img src="assest/posts/p5.jpg" alt="" className="profileCoverImg" />
              <img src="assest/persons/p11.jpg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Deepanjali </h4>
              <span className="profilrInfoDesc">Hello my friends</span>
            </div>
            </div>
            <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
        </div>
        </div>
        </div>
        </>
  )
}

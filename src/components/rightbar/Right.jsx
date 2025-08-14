import "./right.css"
import {Users} from "../../DummyData"
import Online from "../Online/Online.jsx"
import Profile from "../../pages/profile/Profile.jsx"


export default function Right({profile}) {



    const HomeRightbar=()=>{
      return(
        <>
        <div className="brithdaycontainer">
          <img className="birthdayImg" src="assest/gift.png" alt="" />
          <span className="birthdaytext"> <b>khushaboo patil</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>

      <img src="assest/ad.png" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle"> Online Friends </h4>
      <div className="rsc">
      <ul className="rightbarFriendList">

        {Users.map(u=>(
      
          <Online key={u.id} user={u}/>
         
            ))}

      </ul>
      </div>
        </>
      )
    }


    const ProfileRightbar=()=>
    {
      return(<>
        {/* <h4 className="rightbarTitle">User Information</h4> */}
        {/* <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Mumbai</span>
          </div>
            <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">thane</span>
          </div>
            <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          
        </div> */}

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
           <img src="assest/persons/p1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Chloe Davis</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">David Evans</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Emily Frank</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Fiona Green</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George Hill</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Hannah Irving</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p7.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ian Jenkins</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p8.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane King</span>        
          </div>
                     <div className="rightbarFollowing">
           <img src="assest/persons/p9.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George Hill</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Hannah Irving</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p11.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ian Jenkins</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p12.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane King</span>        
          </div>
          <div className="rightbarFollowing">
           <img src="assest/persons/p11.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Chloe Davis</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">David Evans</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Emily Frank</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Fiona Green</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George Hill</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Hannah Irving</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p7.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ian Jenkins</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p8.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane King</span>        
          </div>
                     <div className="rightbarFollowing">
           <img src="assest/persons/p5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George Hill</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Hannah Irving</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p7.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ian Jenkins</span>        
          </div>
           <div className="rightbarFollowing">
           <img src="assest/persons/p8.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane King</span>        
          </div>
          
        </div>
      
      </>)
    }


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
      </div>
  )
}

import "./online.css"


export default function Online({user}) {
  
  return (
    <div className="rightscroll">
    <ul>
      <li className="rightbarFriends">
        <div className="rightbarProfileImgcontainer">
          <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.username}</span>
        

        </li>
        </ul>
        <ul>
        <li className="rightbarFriends">
        <div className="rightbarProfileImgcontainer">
          <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.username}</span>
        
      
        </li>
          </ul>
        </div>
  )
}

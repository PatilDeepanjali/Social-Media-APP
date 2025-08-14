import "./post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "../../DummyData"
import { useState } from "react"

export default function Post({post}) {

    const [like,setLike]=useState(post.like)
    const [isLiked,setIsLiked]=useState(false)  

    const likeHandler=()=>{
      setLike(isLiked? like-1:like+1)
      setIsLiked(!isLiked)

    }




  return (
    
    <div className="post">
       <div className="postWrapper">
        <div className="postTop">
        <div className="postTopLeft">
            <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} 
            alt="" className="postProfileImg" />
            <span className="postUserName"> {Users.filter(u=>u.id===post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
        </div>
        <div className="postTopRight">
        <MoreVert className="postIcon" />

        </div>
       </div>
        <div className="postCenter">
        <span className="postText"> {post?.desc} </span>
        <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
        <div className="postBottomLeft">
            <img src="assest/like.png" className="likeIcon" onClick={likeHandler} alt="" />
            <img src="assest/hart.png" className="likeIcon" onClick={likeHandler} alt="" />
            <span className="postLikeCounter"> {like} people like it</span>
        </div>
        <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comment</span>
        </div>

        </div>
       </div>
        
        
        </div>
  )
}

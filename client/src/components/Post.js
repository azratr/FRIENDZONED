import React, { useState } from "react";
import "../styles/styles.css";
import heart from "../images/heart.png";
import comment from "../images/comment.png";
import dislike from "../images/dislike.png";
import share from "../images/share.png";
import { useSelector } from "react-redux";
import { likePost } from "../api/PostRequest";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id,user._id)
    liked? setLikes((prev)=>prev-1) : setLikes((prev)=>prev+1)
  };
  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="post-react">
        <img
          src={liked ? heart : dislike}
          alt=""
          style={{ height: "30px", cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={comment} alt="" style={{ height: "30px" }} />
        <img src={share} alt="" style={{ height: "30px" }} />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes}likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;

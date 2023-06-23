import React, { useEffect, useRef, useState } from "react";
import "../styles/styles.css";
import { useSelector } from "react-redux";
import LogoSearch from "../components/logoSearch";
import { userChats } from "../api/ChatRequest";
import Conversation from "../components/Conversation";
import { Link } from "react-router-dom";
import { UilSetting } from "@iconscout/react-unicons";
import home from "../images/home.png";
import noti from "../images/noti.png";
import comment from "../images/commenticon.jpg";
import ChatBox from "../components/ChatBox";
import { io} from 'socket.io-client'

const Chat = () => {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  console.log(user);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
   const [receivedMessage, setReceivedMessage] = useState(null);
   const socket = useRef() 

   useEffect(()=>{
      if(sendMessage !== null){
        socket.current.emit('send-message',sendMessage)
      }
   },[sendMessage])

   //receive message

  

  useEffect(()=>{
     socket.current = io('http://localhost:8800');
     socket.current.emit("new-user-add",user._id)
     socket.current.on('get-users',(users)=>{
      setOnlineUsers(users);
     })
   },[user])

  useEffect(()=>{
    socket.current.on("receive-message", (data)=>{
     setReceivedMessage(data)
    })
},[])

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  const checkOnlineStatus = (chat)=>{
    const chatMember = chat.members.find((member)=>member !==user._id)
    const online = onlineUsers.find((user)=>user.userId === chatMember)
    return online? true : false
  }
  return (
    <div className="chat">
      {/*left side*/}
      <div className="left-side-chat">
        <LogoSearch />
        <div className="chat-container">
          <h2>Chats</h2>
          <div className="chat-list">
            {chats.map((chat) => (
              <div onClick={()=>setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} online={checkOnlineStatus(chat)} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*right side*/}
      <div className="right-side-chat">
        <div style={{width:'20rem',alignSelf:'flex-end'}}>
          <div className="nav-Icons">
            <Link to="../home">
              <img src={home} alt="" style={{ height: "30px" }} />
            </Link>
            <UilSetting />
            <img src={noti} alt="" style={{ height: "30px" }} />
            <Link to="../chat">
              <img src={comment} alt="" style={{ height: "25px",marginLeft:"60%" }} />
            </Link>
          </div>
          {/*chatbody*/}
          <ChatBox chat = {currentChat} currentUser = {user._id} setSendMessage={
            setSendMessage} receivedMessage={receivedMessage}/>
        </div>
      </div>
    </div>
  );
};

export default Chat;

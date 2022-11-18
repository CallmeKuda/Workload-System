import React from "react";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import VideocamIcon from '@mui/icons-material/Videocam';
import ContactsIcon from '@mui/icons-material/Contacts';
import ChatMessages from "./ChatMessages"
import Input from "./Input"

const Chat = () => {
 
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Kuda</span>
        <div className="chatIcons">
      <AddIcCallIcon />
      <VideocamIcon/>
      <ContactsIcon/>
      </div>
    </div> 
    <ChatMessages/>
    <Input/>
    </div>
  );
};

export default Chat;

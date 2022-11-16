import React from "react";
import ChatMessages from "./ChatMessages";
import Input from "./Input";

const Chat = () => {
 
  return (
    <div className="chat">
      <ChatMessages />
      <Input/>
    </div>
  );
};

export default Chat;

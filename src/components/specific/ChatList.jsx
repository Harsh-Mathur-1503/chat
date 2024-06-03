import { useState } from "react";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "1", count: 0 }],
  handleDeleteChat,
}) => {
  // Define state to track the active chat ID
  const [activeChatId, setActiveChatId] = useState(null);

  // Define the handleSetActive function to set the active chat ID
  const handleSetActive = (chatId) => {
    setActiveChatId(chatId);
  };

  return (
    <Stack direction="column" spacing={1} width={w}>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          (alert) => alert.chatId === _id
        );

        const isOnline = members?.some((member) => onlineUsers.includes(member));

        const handleDeleteChatOpen = (e) => {
          e.preventDefault();
          handleDeleteChat(_id, groupChat);
        };

        return (
          <ChatItem
            key={_id}
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={_id === chatId}
            isActive={_id === activeChatId} // Pass isActive prop based on active chat ID
            handleSetActive={handleSetActive}
            handleDeleteChatOpen={handleDeleteChatOpen}
          />
        );
      })}
    </Stack>
  );
};

ChatList.propTypes = {
  w: PropTypes.string,
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      groupChat: PropTypes.bool,
      members: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  chatId: PropTypes.string,
  onlineUsers: PropTypes.arrayOf(PropTypes.string),
  newMessagesAlert: PropTypes.arrayOf(
    PropTypes.shape({
      chatId: PropTypes.string.isRequired,
      count: PropTypes.number,
    })
  ),
  handleDeleteChat: PropTypes.func, // assuming handleDeleteChat is a function
};

export default ChatList;

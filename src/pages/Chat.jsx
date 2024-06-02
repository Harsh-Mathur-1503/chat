import AppLayout from "../components/layout/AppLayout";
const Chat = () => {
  return (
    <div>Chat</div>
  );
};

// Add a display name to the component
Chat.displayName = 'Chat';

const ChatWithLayout = AppLayout(Chat);

export default ChatWithLayout;

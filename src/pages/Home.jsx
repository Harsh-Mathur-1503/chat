import AppLayout from "../components/layout/AppLayout";
const Home = () => {
  return (
    <div>Home</div>
  );
};

// Add a display name to the component
Home.displayName = 'Chat';

const ChatWithLayout = AppLayout(Home);

export default ChatWithLayout;

import { Typography, Box } from "@mui/material";
import { memo } from "react";
import PropTypes from "prop-types";
import AvatarCard from "./AvatarCard";
import { Link } from "../styles/StyledComponents"; // Import Link from styled-components
import { dark2, light2, light1, dark1 } from "../../constants/color";

const ChatItem = ({
  avatar,
  name,
  _id,
  groupChat,
  sameSender,
  isOnline,
  newMessageAlert,
  handleDeleteChat,
  isActive,
  handleSetActive,
}) => {
  const handleClick = () => {
    handleSetActive(_id);
  };

  const textColor = sameSender ? dark2 : isActive ? light1 : dark1;

  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
      onClick={handleClick}
      className={isActive ? 'active' : ''}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
          backgroundColor: isActive ? light1 : (newMessageAlert && newMessageAlert.count > 0 ? light2 : "#ffffff"),
          color: textColor,
          position: "relative",
        }}
      >
        <AvatarCard avatar={avatar} />
        <div style={{ flex: 1, marginLeft: "1rem" }}>
          <Typography variant="subtitle1" style={{ fontWeight: 600, color: textColor }}>
            {name}
          </Typography>
          {newMessageAlert && newMessageAlert.count > 0 && (
            <Typography variant="body2" style={{ color: "#007bff", marginTop: "0.5rem" }}>
              {newMessageAlert.count} New Message{newMessageAlert.count > 1 ? 's' : ''}
            </Typography>
          )}
        </div>
        {isOnline && (
          <Box
            sx={{
              width: "1px",
              height: "1px",
              borderRadius: "50%",
              backgroundColor: light2,
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

ChatItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  groupChat: PropTypes.bool,
  sameSender: PropTypes.bool,
  isOnline: PropTypes.bool,
  newMessageAlert: PropTypes.shape({
    count: PropTypes.number.isRequired,
  }),
  handleDeleteChat: PropTypes.func,
  isActive: PropTypes.bool,
  handleSetActive: PropTypes.func,
};

export default memo(ChatItem);

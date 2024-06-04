import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { memo } from "react";
import PropTypes from "prop-types";

const UserItem = ({ user, handler, handlerIsLoading ,isAdded=false }) => {
  const { name, _id, avatar} = user;

  return (
    <ListItem disableGutters sx={{ marginBottom: "0.5rem" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"0.5rem"}
        width={"100%"}
        sx={{
          border: "1px solid",
          borderImage: "linear-gradient(to right, #00ADB5, #E3FDFD) 1",
          borderRadius: "8px",
          padding: "0.75rem",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
          },
          maxWidth: "20rem", // Limit the width
          margin: "0 auto", // Center the Stack horizontally
        }}
      >
        <Avatar src={avatar} alt={name} sx={{ width: 40, height: 40 }} />
        <Typography
          variant="body2" // Use a smaller variant
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            color: "white",
            bgcolor: isAdded ? "#FF2E63" : "#00ADB5",
            "&:hover": {
              bgcolor: isAdded ? "error.main" : "#007B7E",
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
          aria-label={isAdded ? "Remove" : "Add"}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon fontSize="small" />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  handler: PropTypes.func.isRequired,
  handlerIsLoading: PropTypes.bool.isRequired,
  isAdded: PropTypes.bool,
};

export default memo(UserItem);

import { Search as SearchIcon } from "@mui/icons-material"; // Import AddIcon
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { memo } from "react";
import { sampleNotifications } from "../../constants/sampleData";
import { light1, light2 } from "../../constants/color";

const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    // Add logic to accept or reject friend request
    console.log("Friend request accepted:", _id,accept);
  };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {sampleNotifications.length > 0 ? (
            sampleNotifications.map(({ sender, _id }) => (
              <NotificationItem
                sender={sender}
                _id={_id}
                handler={friendRequestHandler}
                key={_id}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Notifications</Typography>
          )}
        </List>
      </Stack>
    </Dialog>
  );
};
Notifications.displayName = 'Notifications';

const NotificationItem = memo(({ sender, _id, handler }) => {
  // Assuming `name` and `avatar` are available through `sender` object
  const { name, avatar } = sender;

  return (
    <ListItem disableGutters sx={{ marginBottom: "0.5rem" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"0.5rem"}
        width={"100%"}
        sx={{
          border: "0.5px solid",
          borderRadius: "8px",
          borderImage: "linear-gradient(to right, #EEEEE, #E3FDFD) 1",
          padding: "0.75rem",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            borderImage: "linear-gradient(to right, #00ADB5, #E3FDFD) 1",
          },
          maxWidth: "20rem",
          margin: "0 auto",
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
          {`${name} sent you a friend request`}
          <Stack direction={{
            xs: "column",
            sm: "row",
          }}>
            <Button onClick={()=>handler({_id,accept:true})}
            variant="text"
            size="small"
            sx={{
              backgroundColor: light1,
            color: "#00ADB5",
            ":hover": {
              backgroundColor: "#00ADB5",
              color: light1
            },
            }}
            >
              Accept
            </Button>
            <Button color="error" variant="text"
             onClick={()=>handler({_id,accept:false})}
             size="small"
             sx={{
              borderColor: light2, color: "#FF2E63", ":hover": {
                backgroundColor: "#FF2E63",
                color: light2,
                outline: "none"
              }
             }}
             >
              Reject
            </Button>
          </Stack>
        </Typography>
      </Stack>
    </ListItem>
  );
});

NotificationItem.propTypes = {
  sender: PropTypes.object.isRequired, // Ensure sender is an object
  _id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

NotificationItem.displayName = 'NotificationItem'; // Set display name

export default Notifications;

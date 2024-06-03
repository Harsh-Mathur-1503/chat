import { Avatar, Stack, Typography } from "@mui/material";
import { light1, light2 } from "../../constants/color";
import { Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalendarIcon } from "@mui/icons-material";
import PropTypes from "prop-types";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} alignItems={"center"}>
      <Avatar sx={{
        width:"150px",
        height:"150px",
        objectFit:"contain",
        marginBottom:"1rem",
        border:"5px solid white"
      }} />
      <ProfileCard heading={"Bio"} text={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sagittis ante, in mattis libero."} />
      <ProfileCard heading={"Username"} text={"Harsh-Mathur-1503"} Icon={UsernameIcon} />
      <ProfileCard heading={"Name"} text={"Harsh Mathur"} Icon={FaceIcon} />
      <ProfileCard heading={"Joined"} text={moment("2024-01-04T12:30:00.000Z").fromNow()} Icon={CalendarIcon} />
    </Stack>
  );
};

const ProfileCard = ({text, Icon, heading}) => {
  return (
    <Stack 
      direction={"row"}
      spacing={"1rem"}
      alignItems={"center"}
      color={light2}
      textAlign={"center"}
      sx={{
        border: "1px solid #00ADB5", // Change border color here
        borderRadius: "4px",
        padding: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        }
      }}
    >
      {Icon && <Icon sx={{ fontSize: "2rem" }} />}
      <Stack>
        <Typography variant="body1" color={light1}>{text}</Typography>
        <Typography color={light2} variant="caption">{heading}</Typography>
      </Stack>
    </Stack>
  );
};

ProfileCard.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
  heading: PropTypes.string.isRequired,
};

export default Profile;

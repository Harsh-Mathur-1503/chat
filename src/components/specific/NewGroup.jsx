import { useInputValidation } from "6pp";
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { light1, light2 } from "../../constants/color";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const NewGroup = () => {

  const selectMemberHandler = (id) => {
    console.log(id);
    setSelectedMembers((prev) =>prev.includes(id) ? prev.filter((currElement) => currElement!==id) : [...prev, id])
  }

  const groupName = useInputValidation("")

  const [members,setMembers] = useState(sampleUsers);
  const [selectedMembers,setSelectedMembers] = useState([]);


  const submitHandler = () => {
    console.log(groupName.value);
  }

  const closeHandler = () => {
    console.log("Close");
  }

  return (

    <Dialog open onClose={closeHandler}>
      <Stack
        p={{ xs: "1rem", sm: "2rem" }}
        width={"25rem"}
        sx={{
          background: `linear-gradient(to bottom, #F9F7F7, #EEEEE)`
        }}
      >
        <DialogTitle textAlign={"center"} variant="h5" color={"#393E46"}>New Group</DialogTitle>
        <TextField label="Group Name" placeholder="Type the Group Name..." variant="outlined" size="small" value={groupName.value} onChange={groupName.changeHandler} />
        <Typography variant="body1" mt={"1rem"} color={"#393E46"}>Members</Typography>
        {members.map((user) => (
          <UserItem user={user} key={user._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)} />
        ))}
        <Stack mt={"1rem"} direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="contained" size="large" onClick={submitHandler} sx={{
            backgroundColor: light1,
            color: "#00ADB5",
            ":hover": {
              backgroundColor: "#00ADB5",
              color: light1
            },
          }}>Create</Button>
          <Button variant="text" size="large" sx={{
            borderColor: light2, color: "#00ADB5", ":hover": {
              backgroundColor: light1,
              color: "#00ADB5",
              outline: "none"
            }
          }}>Cancel</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup;

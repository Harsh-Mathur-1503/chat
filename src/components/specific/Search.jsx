import { Dialog, DialogTitle, List, Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { useInputValidation } from "6pp"; // Assuming this is a custom hook you have implemented
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";

const Search = () => {
  const search = useInputValidation("");
  const [users, setUsers] = useState(sampleUsers);
  let isLoadingSendFriendRequest = false;

  const addFriendHandler = (id) => {
    console.log(id);
  };

  return (
    <Dialog open>
      <Stack
        p={"2rem"}
        direction={"column"}
        width={"25rem"}
        spacing={"1.5rem"}
      >
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField 
          placeholder="Search..."
          value={search.value}
          onChange={search.changeHandler}
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
          {users.map((user) => (
            <UserItem 
              user={user} 
              key={user._id} 
              handler={addFriendHandler} 
              handlerIsLoading={isLoadingSendFriendRequest} 
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;

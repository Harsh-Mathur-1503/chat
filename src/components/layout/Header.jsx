import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { dark1, light2 } from "../../constants/color"
import { Menu as MenuIcon , Search as SearchIcon , Add as AddIcon ,Group as GroupIcon , Logout as LogoutIcon , Notifications as NotificationsIcon } from "@mui/icons-material"; 
import { useNavigate } from "react-router-dom";
import IconBtn from '../shared/IconBtn';
import { lazy, Suspense, useState } from "react";


const SearchDialog = lazy(() => import("../specific/Search"))
const NotificationDialog = lazy(() => import("../specific/Notifications"))
const NewGroupDialog = lazy(() => import("../specific/NewGroup"))
const Header = () => {
    const navigate = useNavigate();


    const [isMobile,setIsMobile] = useState(false);
    const [isSearch,setIsSearch] = useState(false);
    const [isNewGroup,setIsNewGroup] = useState(false);
    const [isNotification,setIsNotification] = useState(false);

    const HandleMobile = () => {
        setIsMobile(!isMobile);
    }

    const OpenSearchDialog = () => {
        setIsSearch(!isSearch);
    }

    const OpenNewGroup = () => {
        setIsNewGroup(!isNewGroup);
    }

    const OpenNotification = () => {
        setIsNotification(!isNotification);
    }

    const NavigateToGroup = () => {
        navigate("/group");
    }

    const logoutHandler = () => {
        console.log("logout")
    }

    return (
        <>
            <Box sx={{
                flexGrow: 1
            }}
            height={"4rem"}>
                <AppBar position="static" sx={{
                    bgcolor: dark1,
                }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "block"
                                },
                                padding: 2,
                            }}
                        >
                            Conversify
                        </Typography>
                        <Box sx={{
                            display: {
                                xs: "block",
                                sm: "none"
                            }
                        }}>
                            <IconButton color="inherit" onClick={HandleMobile}>
                                <MenuIcon style={{ color: light2 }} /> 
                            </IconButton>
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                        }} />
                        <Box>
                            <IconBtn 
                            title={"Search"}
                            icon={<SearchIcon />}
                            onClick={OpenSearchDialog}
                            />
                            <IconBtn 
                            title={"New Group"}
                            icon={<AddIcon />}
                            onClick={OpenNewGroup}
                            />
                            <IconBtn 
                            title={"Manage Groups"}
                            icon={<GroupIcon />}
                            onClick={NavigateToGroup}
                            />
                            <IconBtn 
                            title={"Notifications"}
                            icon={<NotificationsIcon />}
                            onClick={OpenNotification}
                            />
                            <IconBtn
                            title={"Logout"}
                            icon={<LogoutIcon />}
                            onClick={logoutHandler}
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {
                isSearch && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SearchDialog />
                    </Suspense>
                )
            }
            {
                isNotification && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <NotificationDialog />
                    </Suspense>
                )
            }
            {
                isNewGroup && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <NewGroupDialog />
                    </Suspense>
                )
            }




        </>
    )
}

export default Header;

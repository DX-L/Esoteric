import React from "react";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import PostAddIcon from '@mui/icons-material/PostAdd';

function ClientSidebar() {
    return (
        <Box bgcolor='white' flex={1} p={2} sx={{display:{xs:"none", sm: "block"}}}>
            <Box position="fixed"> 
            {/* 外面的Box是为了让里面的Box固定在页面不被其他框占据，里面的box是为了在浏览页面时sidebar位置不变 */}
                <List>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#chat">
                            <ListItemIcon>
                                <ChatIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Chat"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#order">
                            <ListItemIcon>
                                <AddShoppingCartIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Orders"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#post">
                            <ListItemIcon>
                                <PostAddIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Post"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#liked">
                            <ListItemIcon>
                                <FavoriteBorderIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Liked"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#liked">
                            <ListItemIcon>
                                <ModeNightIcon/>
                            </ListItemIcon>
                            <Switch/>
                        </ListItemButton>
                    </ListItem>

                    
                </List>
            </Box>
        </Box>
    );
}

export default ClientSidebar;
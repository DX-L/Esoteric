import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, InputBase, Box, Menu, MenuItem, Badge, Avatar } from "@mui/material";
import styled from "@mui/material/styles/styled";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: '0px 10px',
    borderRadius: theme.shape.borderRadius,
    width: '25%',
}))

const Messages = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.common.white,
    display: 'None',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}))

const Userbox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
}))

const ClientNav = () => {
    // 两种下拉菜单，现在用的比较美观，just in case后期语法冲突，留下第一种
    // const [open, setOpen] = useState(false); // Used for opening and closing menu
    // const [anchorEl, setAnchorEl] = useState(null); // Used for positioning menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Esoretic</Typography>
                <HomeIcon color="action" sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="Search" />Search</Search>
                <Userbox>
                    <Messages>
                        <Badge badgeContent={100} color="success">
                            <MailIcon color="inherit" />
                        </Badge>
                    </Messages>
                    <Userbox>
                        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Seager</Typography>
                        {/* <Avatar
                            sx={{ height: "30px", width: "30px" }}
                            alt="Remy Sharp" src="/static/images/avatar/2.jpg"
                            onClick={e => setOpen(true)}
                        /> */}
                        <Avatar
                            sx={{ height: "30px", width: "30px" }}
                            alt="Seager Zhang" src="/public/logo.png"
                            onClick={handleClick}
                        />
                        {/* 这里需要解决的问题：图片加载不出？ 已解决，使用绝对路径从public静态引用*/}

                    </Userbox >
                </Userbox>

                {/* <Button color="inherit">Sign Out</Button> */}
            </StyledToolbar>
            {/* <Menu
                            id="basic-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={e => setOpen(false)}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem >Profile</MenuItem>
                            <MenuItem >My account</MenuItem>
                            <MenuItem >Logout</MenuItem>
            </Menu> */}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default ClientNav;
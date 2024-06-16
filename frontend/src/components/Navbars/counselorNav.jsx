// 这个是counselor的导航栏，后续需要添加广场，需要和client的导航栏进行区分

import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/logo.png';

function CounselorNav() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#b5c99a'}}>
                <Toolbar>
                    <Button
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="logo"
                        sx={{ mr: 2 }}
                        component={Link} to="/welcome"
                    >
                        <img src={logo} alt="Esoteric logo" style={{ height: '40px' }} />
                    </Button>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        这边可以加文字，如果需要的话
                    </Typography> */}
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Button component={Link} to="/welcome" color="inherit">Home</Button>
                    <Button component={Link} to="/browse" color="inherit">Browse</Button>
                    <Button component={Link} to="/signin" color="inherit">Sign out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default CounselorNav;

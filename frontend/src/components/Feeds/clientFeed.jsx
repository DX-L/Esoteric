import React from "react";
import Box from '@mui/material/Box';
import AddPostCardButton from '../Utils/addPostCardButton';

function ClientFeed() {
    return (
        <Box bgcolor="seagreen" flex={4} p={2}>
            <h1>Feed</h1>
            <AddPostCardButton />
        </Box>
    );
}

export default ClientFeed;
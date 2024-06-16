import React from 'react';
import Sidebar from '../components/Sidebars/clientSidebar';
import ClientNav from '../components/Navbars/clientNav';
import Feed from '../components/Feeds/clientFeed';
import {Box, Stack, Divider} from '@mui/material';


function ClientProfilePage() {

    return (
        <Box>
            <ClientNav />
            <Stack direction="row" spacing={2} justufyContent="space-between">
            
                
                <Sidebar />
                <Divider orientation="vertical" flexItem />
                <Feed />
            </Stack>
        </Box>
        

    );


}

export default ClientProfilePage;
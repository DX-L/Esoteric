// counselors profile page
import React from 'react';
import CouselorNav from '../components/Navbars/counselorNav.jsx';
import Box, { boxClasses } from '@mui/material/Box';
import AppRoutes from '../routes/AppRoutes.jsx';
import { borders } from '@mui/system';
import UploadPic from '../components/Profiles/UploadPic.jsx';
import ProfilePic from '../components/Profiles/profilePic.jsx';


function CounselorProfilePage() {
    return (

            <Box sx={{ display: 'flex', flexDirection: 'column', m: 0}}>
                <Box sx={{ flexGrow: 1 }}>
                    <CouselorNav />                   
                </Box>
                <Box sx={{ mt: (theme) => theme.spacing(8) }}></Box> {/* theme.spacing(8) 通常等于 64px 防止nav遮挡下方内容*/}
                <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row', m: 0, height: '100vh' }}>
                    <Box sx={{ width: '50%', bgcolor: 'lightgray', p: 2, boxSizing: 'border-box', borderRight: 1, borderColor: 'grey.500', height: '100%' }}>
                        <UploadPic />
                        <ProfilePic />
                        
                    </Box>
                    <Box sx={{ flexGrow: 1, bgcolor: 'whitesmoke', p: 2, boxSizing: 'border-box', height: '100%' }}>
                        <h2>content area
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci excepturi a quae deserunt vel ea ut, cumque sapiente consequatur dicta accusamus, magnam ducimus earum quis reiciendis nostrum itaque id ratione.
                        </h2>
                        
                        <AppRoutes />
                    </Box>
                </Box>
            </Box>

        
        
        
    )

}

export default CounselorProfilePage;
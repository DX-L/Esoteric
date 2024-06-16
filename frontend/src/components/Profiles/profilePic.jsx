import React, { useState } from 'react';
import { Button, IconButton, TextField, Box } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ProfilePicUploader() {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [showUpload, setShowUpload] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setImage(null);
        setPreviewUrl('');
        localStorage.removeItem('savedImage');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            {showUpload && (
                <TextField
                    type="file"
                    InputProps={{
                        endAdornment: (
                            <IconButton color="primary" component="span">
                                <PhotoCamera />
                            </IconButton>
                        ),
                    }}
                    variant="filled"
                    onChange={handleFileChange}
                />
            )}
            <IconButton color="primary" onClick={() => setShowUpload(true)}>
                <CloudUploadIcon />
            </IconButton>
            {previewUrl && (
                <Box>
                    <img src={previewUrl} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    <IconButton color="secondary" onClick={handleDeleteImage}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
}

export default ProfilePicUploader;

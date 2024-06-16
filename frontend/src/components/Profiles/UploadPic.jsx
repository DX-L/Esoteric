// 上传用户头像组件
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function UploadPic() {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [showUpload, setShowUpload] = useState(false);

    useEffect(() => {
        const savedImage = localStorage.getItem('savedImage');
        if (savedImage) {
            setPreviewUrl(savedImage);
        }
    }
        , []);

    // 上传图片
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
                localStorage.setItem('savedImage', reader.result);  // 存储图片到LocalStorage
            };
            reader.readAsDataURL(file);
        }
    };

    // 从LocalStorage加载图片
    const handleLoadImage = () => {
        const savedImage = localStorage.getItem('savedImage');
        if (savedImage) {
            setPreviewUrl(savedImage);
        }
    };

    const deleteImage = () => {
        localStorage.removeItem('savedImage');
        setPreviewUrl('');
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', m: 0.1 }}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {previewUrl && <img src={previewUrl} alt="Preview" style={{ width: '100px', height: '100px' }} />}
            <button onClick={deleteImage}>Delete Image</button>
            <button onClick={handleLoadImage}>Load Image</button>
        </Box>
    );
}


export default UploadPic;



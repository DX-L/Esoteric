import React, { useState } from "react";
import AddIcon from '@mui/icons-material/AddBox';
import { Tooltip, Box, Fab, Modal, Typography, TextField, Button } from '@mui/material';
import styled from '@mui/material/styles/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AddPostCardButton = () => {
    const [open, setOpen] = useState(false);
    // const [postData, setPostData] = useState({
    //     title: "",
    //     content: "",
    //     image: null,
    //     tags: ""
    // });
    // const [posts, setPosts] = useState([]);
    // const handleChange = (e) => {
    //     setPostData({
    //         ...postData,
    //         [e.target.name]: e.target.value
    //     });
    // }
    // const handleImageChange = (e) => {
    //     setPostData({
    //         ...postData,
    //         image: e.target.files[0]
    //     });
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("title", postData.title);
    //     formData.append("content", postData.content);
    //     formData.append("image", postData.image);
    //     formData.append("tags", postData.tags);
    //     fetch("http://localhost:8000/api/posts/", {
    //         method: "POST",
    //         body: formData,
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("token")}`
    //         }
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setPosts([...posts, data]);
    //         setOpen(false);
    //     })
    //     .catch((err) => console.log(err));
    // }
    // const handleSubmit = () => {
    //     setPosts([...posts, postData]);
    //     setOpen(false);
    //     setPostData({ title: "", content: "", image: null, tags: "" });  // Reset form
    // };

    return (
        <Box>
            <Tooltip onClick={(e) => setOpen(true)} title="Add New Post" sx={{ position: "fixed", bottom: 20, right: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={600} height={400} bgcolor={'#eaf4f4'} p={3} borderRadius={5}>
                    <Typography variant="h5" color="gray" textAlign="center">New Post</Typography>
                    {/* 用file upload上传图片，然后在postcard里面显示图片,最好写成小组件
                    下一个要解决的问题是，让图片显示出来
                    */}
                    <Box p={2} 
                    sx={{display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                        }}
                    >
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload Image
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </Box>

                    <TextField fullWidth id="standard-basic" label="Title" variant="standard" sx={{ mt: 2 }} />
                    <TextField
                        id="outlined-textarea"
                        label="Post Content"
                        placeholder="What's on your mind?"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        bgcolor={'#f6fff8'}
                    />
                </Box>
            </StyledModal>
        </Box>
    );
}

export default AddPostCardButton;

// 把这个button放到feed里面，然后在feed里面调用这个button，box的大小需要与postcard的颗粒度对齐 ：）
// 还有一种选项，放在页面右下角，这样就不用考虑postcard的大小了，只需要考虑页面的大小
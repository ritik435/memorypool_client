import React, { useEffect, useState } from "react";
import { Paper, Button, Typography, TextField } from "@mui/material";
// import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from "./styles.js"
import { createPost, updatePost } from "../../actions/posts";
import SearchForm from "./SearchForm/SearchForm.js";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ headline: '', primaryText: '', description: '', CTA: '', selectedfile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();

    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ headline: '', primaryText: '', description: '', CTA: '', selectedfile: '' })

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField name="primaryText" variant="outlined" label="PrimaryText" fullWidth value={postData.primaryText} onChange={(e) => setPostData({ ...postData, primaryText: e.target.value })} />
                <TextField name="headline" variant="outlined" label="Headline" fullWidth value={postData.headline} onChange={(e) => setPostData({ ...postData, headline: e.target.value })} />
                <TextField name="description" variant="outlined" label="Description" fullWidth multiline minRows={4} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <TextField name="CTA" variant="outlined" label="CTA" fullWidth value={postData.CTA} onChange={(e) => setPostData({ ...postData, CTA: e.target.value })} />
                <TextField name="file" variant="outlined" label="File-String" fullWidth value={postData.selectedfile} onChange={(e) => setPostData({ ...postData, selectedfile: e.target.value })} />
                {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>

    )
}
export default Form;


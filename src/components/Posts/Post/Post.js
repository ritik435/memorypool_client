import React from "react";
import useStyles from "./styles.js"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment';
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts.js";

const Post = ({ post, setCurrentId }) => {

    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia component="img" className={classes.media} image={post.file} height="140" title={post.headline} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.headline}</Typography>
                <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.CTA}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.primaryText}</Typography>
            <CardContent>
                <Typography variant="h6" gutterBottom>{post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>

    )
}
export default Post;


import React, { useEffect, useState,createContext } from "react";
import { Container, Typography, AppBar, Grid, Grow, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux"
// import { useHistory } from "react-router-dom";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts.js"
import Form from "./components/Form/Form.js"
import memory from "./components/images/memory.png"
import useStyles from "./styles.js"

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    // let history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            //search POST
            searchPost();
        }
    }
    const searchPost = () => {
        if (search.trim()) {
            //dispatch-> fetch search post
            // dispatch(getPostBySearch({ search }));
        } else {
            // history.push('/');
        }
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Grow in>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Ad Search Box</Typography>
                    <img className={classes.image} src={memory} alt="Ads view" height="60" width="60" />
                </AppBar>
                {/* <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                    <TextField name="search"
                                        variant="outlined"
                                        label="Search Memories"
                                        fullWidth
                                        onKeyPress={handleKeyPress}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)} />
                                    <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="contained">Search</Button>
                                </AppBar>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow> */}
            </Container>
        </Grow>
    )
}
export default App;



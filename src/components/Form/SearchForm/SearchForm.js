
import { Paper, Button, Typography, TextField } from "@mui/material";

import useStyles from "./styles.js"


const SearchForm = () => {
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const clear = () => {

    }
    return (
        // <h1>Form</h1>
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Search Box</Typography>
                <TextField name="primaryText" variant="outlined" label="PrimaryText" fullWidth />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>

    )
}
export default SearchForm;
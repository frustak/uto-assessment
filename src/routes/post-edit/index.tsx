import { Box, Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        paddingTop: 20,
    },
    form: {
        paddingBottom: 80,
    },
    input: {
        margin: "10px 0",
    },
});

function PostEdit() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <form autoComplete="off" className={classes.form}>
                <TextField
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                    helperText="This field is required"
                    label="Title"
                    error
                />
                <TextField
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                    helperText="This field is required"
                    multiline
                    label="Content"
                    minRows={2}
                    maxRows={20}
                />
            </form>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Button variant="contained" size="large" color="secondary">
                    CANCEL
                </Button>
                <Button variant="contained" size="large" color="primary">
                    SAVE
                </Button>
            </Box>
        </Box>
    );
}

export default PostEdit;

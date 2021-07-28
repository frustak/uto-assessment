import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { useLocation } from "react-router";
import { Post } from "../../api/schemas";
import { useEditPost } from "../../store/hooks";

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
    const post = useLocation<{ post: Post }>().state.post;
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const { cancel, save } = useEditPost();
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <form autoComplete="off" className={classes.form}>
                <TextField
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                    helperText={!title ? "This field is required" : " "}
                    label="Title"
                    error={!title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                    helperText={!body ? "This field is required" : " "}
                    multiline
                    label="Content"
                    minRows={2}
                    maxRows={20}
                    error={!body}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </form>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={cancel}
                >
                    CANCEL
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={() => save({ ...post, title, body })}
                >
                    SAVE
                </Button>
            </Box>
        </Box>
    );
}

export default PostEdit;

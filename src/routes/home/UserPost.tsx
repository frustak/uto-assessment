import { Button, ListItemText, makeStyles, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Post } from "../../api/schemas";

const useStyles = makeStyles({
    button: {
        display: "block",
        width: "100%",
        padding: 0,
        textAlign: "start",
        textTransform: "none",
    },
    item: {
        padding: "10px 20px",
        margin: 10,
    },
});

type UserPostProps = {
    post: Post;
};

function UserPost({ post }: UserPostProps) {
    const history = useHistory();
    const classes = useStyles();

    const navigateToPostEdit = () => {
        history.push({
            pathname: "/post-edit",
            state: { post },
        });
    };

    return (
        <Button className={classes.button} onClick={navigateToPostEdit}>
            <Paper className={classes.item} elevation={2}>
                <ListItemText>{post.title}</ListItemText>
            </Paper>
        </Button>
    );
}

export default UserPost;

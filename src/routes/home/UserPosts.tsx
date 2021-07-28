import { Box, makeStyles, Paper } from "@material-ui/core";
import { useGetPosts, useGetUser } from "../../store/hooks";
import UserPost from "./UserPost";

const useStyles = makeStyles({
    root: {
        padding: 20,
        marginTop: 18,
        backgroundColor: "#e8eaf6",
    },
    title: {
        textAlign: "center",
        fontSize: "x-large",
        fontWeight: 100,
        marginBottom: 20,
    },
});

function UserPosts() {
    const posts = useGetPosts();
    const user = useGetUser();
    const classes = useStyles();

    const renderPosts = () =>
        posts.map((post) => <UserPost key={post.id} post={post} />);

    if (!user) return null;

    return (
        <Paper className={classes.root} elevation={2}>
            <Box className={classes.title}>{user.name} Posts</Box>

            {renderPosts()}
        </Paper>
    );
}

export default UserPosts;

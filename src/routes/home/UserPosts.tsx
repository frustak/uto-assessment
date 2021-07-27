import { Box, makeStyles, Paper } from "@material-ui/core";
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

type UserPostsProps = {
    name: string;
};

function UserPosts({ name }: UserPostsProps) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={2}>
            <Box className={classes.title}>{name} Posts</Box>

            <UserPost title="POST 1" />
            <UserPost title="POST 2" />
            <UserPost title="POST 3" />
            <UserPost title="POST 4" />
            <UserPost title="POST 5" />
        </Paper>
    );
}

export default UserPosts;

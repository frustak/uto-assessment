import { Box, ListItemText, makeStyles, Paper } from "@material-ui/core";

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
    item: {
        padding: "10px 20px",
        margin: 10,
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

            <Paper className={classes.item} elevation={2}>
                <ListItemText>POST 1</ListItemText>
            </Paper>
            <Paper className={classes.item} elevation={2}>
                <ListItemText>POST 1</ListItemText>
            </Paper>
            <Paper className={classes.item} elevation={2}>
                <ListItemText>POST 1</ListItemText>
            </Paper>
            <Paper className={classes.item} elevation={2}>
                <ListItemText>POST 1</ListItemText>
            </Paper>
            <Paper className={classes.item} elevation={2}>
                <ListItemText>POST 1</ListItemText>
            </Paper>
        </Paper>
    );
}

export default UserPosts;

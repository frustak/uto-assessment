import { Button, ListItemText, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        display: "block",
        width: "100%",
        padding: 0,
        textAlign: "start",
    },
    item: {
        padding: "10px 20px",
        margin: 10,
    },
});

type UserPostProps = {
    title: string;
};

function UserPost({ title }: UserPostProps) {
    const classes = useStyles();

    return (
        <Button className={classes.button}>
            <Paper className={classes.item} elevation={2}>
                <ListItemText>{title}</ListItemText>
            </Paper>
        </Button>
    );
}

export default UserPost;

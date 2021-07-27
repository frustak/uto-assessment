import { List, makeStyles } from "@material-ui/core";
import User from "./User";

const useStyles = makeStyles({
    root: {
        marginLeft: 10,
    },
});

function Users() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <User name="User 1" />
            <User name="User 2" selected />
            <User name="User 3" />
        </List>
    );
}

export default Users;

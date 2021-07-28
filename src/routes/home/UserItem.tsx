import { Button, ListItemText, makeStyles, Paper } from "@material-ui/core";
import { User } from "../../api/schemas";

const useStyles = makeStyles({
    button: {
        display: "block",
        width: "100%",
        padding: 0,
        textTransform: "none",
    },
    item: {
        padding: "10px 20px",
        margin: 10,
    },
    selected: {
        backgroundColor: "#2c387e",
        color: "white",
    },
});

type UserItemProps = {
    user: User;
    onClick: () => void;
    selected?: boolean;
};

function UserItem({ user, onClick, selected = false }: UserItemProps) {
    const classes = useStyles();
    const classNames = `${classes.item} ${selected ? classes.selected : ""}`;
    const elevation = selected ? 4 : 2;

    return (
        <Button className={classes.button} onClick={onClick}>
            <Paper className={classNames} elevation={elevation}>
                <ListItemText>{user.name}</ListItemText>
            </Paper>
        </Button>
    );
}

export default UserItem;

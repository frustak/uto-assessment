import { ListItemText, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        padding: "10px 20px",
        margin: 10,
    },
    selected: {
        backgroundColor: "#2c387e",
        color: "white",
    },
});

type UserProps = {
    name: string;
    selected?: boolean;
};

function User({ name, selected = false }: UserProps) {
    const classes = useStyles();
    const classNames = `${classes.root} ${selected ? classes.selected : ""}`;
    const elevation = selected ? 4 : 2;

    return (
        <Paper className={classNames} elevation={elevation}>
            <ListItemText>{name}</ListItemText>
        </Paper>
    );
}

export default User;

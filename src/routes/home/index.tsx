import { AppBar, Grid, makeStyles } from "@material-ui/core";
import UserDetail from "./UserDetail";
import Users from "./Users";

const useStyles = makeStyles({
    appBar: {
        height: 80,
    },
    content: {
        marginTop: 80,
    },
});

function Home() {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBar} />

            <Grid className={classes.content} container spacing={3}>
                <Grid item xs={4}>
                    <Users />
                </Grid>
                <Grid item xs={8}>
                    <UserDetail />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

import { Grid } from "@material-ui/core";
import UserPosts from "./UserPosts";
import Users from "./Users";

function Home() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Users />
            </Grid>
            <Grid item xs={8}>
                <UserPosts name="User 2" />
            </Grid>
        </Grid>
    );
}

export default Home;

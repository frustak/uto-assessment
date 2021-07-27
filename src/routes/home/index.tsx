import { Grid } from "@material-ui/core";
import { useFetchPosts } from "../../store/hooks";
import UserPosts from "./UserPosts";
import UserList from "./UserList";

function Home() {
    useFetchPosts();

    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <UserList />
            </Grid>

            <Grid item xs={8}>
                <UserPosts name="User 2" />
            </Grid>
        </Grid>
    );
}

export default Home;

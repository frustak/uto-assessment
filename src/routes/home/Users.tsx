import { List } from "@material-ui/core";
import User from "./User";

function Users() {
    return (
        <List>
            <User name="User 1" />
            <User name="User 2" selected />
            <User name="User 3" />
        </List>
    );
}

export default Users;

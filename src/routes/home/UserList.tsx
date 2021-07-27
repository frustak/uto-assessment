import { List } from "@material-ui/core";
import UserItem from "./UserItem";

function UserList() {
    return (
        <List>
            <UserItem name="User 1" />
            <UserItem name="User 2" selected />
            <UserItem name="User 3" />
        </List>
    );
}

export default UserList;

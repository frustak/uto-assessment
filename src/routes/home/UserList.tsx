import { List } from "@material-ui/core";
import { useFetchPosts, useGetUsers } from "../../store/hooks";
import UserItem from "./UserItem";

function UserList() {
    const users = useGetUsers();
    const { selectedUser, setSelectedUser } = useFetchPosts();

    const renderUsers = () =>
        users.map((user) => (
            <UserItem
                key={user.id}
                user={user}
                onClick={() => setSelectedUser(user)}
                selected={selectedUser?.id === user.id}
            />
        ));

    return <List>{renderUsers()}</List>;
}

export default UserList;

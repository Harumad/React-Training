import userStore from "../store/userStore";
import UserItem from "./UserItem";

/*
  This component ONLY displays users.
  It does NOT manage state itself.
*/

function UserList() {
  // Get users directly from Zustand
  const users = userStore((state) => state.users);

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;

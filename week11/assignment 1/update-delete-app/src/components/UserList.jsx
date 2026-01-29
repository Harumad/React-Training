import userStore from "../userStore";

export default function UserList() {
  const users = userStore((state) => state.users);
  const deleteUser = userStore((state) => state.deleteUser);
  const setUserToEdit = userStore((state) => state.setUserToEdit);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.course}</p>

          <button onClick={() => setUserToEdit(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

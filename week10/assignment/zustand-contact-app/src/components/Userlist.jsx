// Component that renders the list of users
import UserItem from "./UserItem";
import userStore from "../Store/userStore";

function UserList() {
  // Get users from store
  const users = userStore((state) => state.users);

  return (
    <div className="bg-white/70 backdrop-blur-lg shadow-2xl p-8 rounded-2xl max-w-xl mx-auto">
      {/* Title */}
      <h1 className="text-2xl font-extrabold mb-6 text-center text-gray-800">
        List Of Contacts
      </h1>

      {/* Empty state */}
      {users.length === 0 && (
        <p className="text-center text-gray-500">No contacts available</p>
      )}

      {/* User cards */}
      {users.map((user) => (
        <UserItem key={user.id} details={user} />
      ))}
    </div>
  );
}

export default UserList;

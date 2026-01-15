// Single user card component
import userStore from "../Store/userStore";

function UserItem({ details }) {
  // Get delete action from store
  const deleteUser = userStore((state) => state.deleteUser);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex justify-between items-start hover:shadow-lg transition">
      {/* User details */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{details.name}</h2>

        <p className="text-sm text-gray-600">Phone: {details.phone}</p>

        <p className="text-sm text-gray-600">Email: {details.email}</p>
      </div>

      {/* Delete button */}
      <button
        onClick={() => deleteUser(details.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
      >
        Delete
      </button>
    </div>
  );
}

export default UserItem;

import userStore from "../Store/userStore";



function UserItem({ details }) {
  const deleteUser = userStore ((state) =>state.deleteUser);
  return (
    <div className="border p-2 mb-2 rounded flex justify-between items-center">
      <div>
        <p>
          <strong>Name:</strong> {details.name}
        </p>
        <p>
          <strong>Email:</strong> {details.email}
        </p>
      </div>

      <button
        onClick={() => deleteUser(details.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default UserItem;

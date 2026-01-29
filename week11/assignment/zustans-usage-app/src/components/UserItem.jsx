import { useState } from "react";
import userStore from "../store/userStore";

/*
  Each user row can:
  - be edited
  - be deleted
*/

function UserItem({ user }) {
  const deleteUser = userStore((state) => state.deleteUser);
  const updateUser = userStore((state) => state.updateUser);

  // Local state for editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // Save edited user
  const handleSave = () => {
    updateUser(user.id, { name, email });
    setIsEditing(false);
  };

  return (
    <div className="border p-3 rounded flex justify-between items-center">
      {isEditing ? (
        /* EDIT MODE */
        <div className="space-y-2 flex-1 mr-4">
          <input
            className="border p-1 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border p-1 w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      ) : (
        /* VIEW MODE */
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteUser(user.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserItem;

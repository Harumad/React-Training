import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

/*
  This store holds ALL user data for the entire app.
  Any component can:
  - read users
  - add users
  - edit users
  - delete users
*/

const userStore = create((set) => ({
  // Initial users (fake data for demo)
  users: [
    {
      id: uuidv4(),
      name: "Haruna Mohammed",
      email: "haruna@email.com",
    },
    {
      id: uuidv4(),
      name: "Isaac Joe",
      email: "isaac@email.com",
    },
  ],

  // ➕ Add new user
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: uuidv4() }],
    })),

  // ✏️ Edit existing user
  updateUser: (id, updatedData) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user,
      ),
    })),

  // 🗑️ Delete user
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));

export default userStore;

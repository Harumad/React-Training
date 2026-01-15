// Zustand store for managing users (global state)
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const userStore = create((set) => ({
  // Initial users
  users: [
    {
      id: uuidv4(),
      name: "Haruna mohammed",
      phone: "0540000000",
      email: "haru@email.com",
    },
    {
      id: uuidv4(),
      name: "Isaa Joe",
      phone: "0240000000",
      email: "isaac@email.com",
    },
    {
      id: uuidv4(),
      name: "David Dan",
      phone: "0200000000",
      email: "isaac@email.com",
    },
  ],

  // Add a new user to the list
  addNewUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: uuidv4() }],
    })),

  // Delete a user by ID
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));

export default userStore;

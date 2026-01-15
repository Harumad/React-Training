import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const userStore = create((set) => ({
  users: [
    { id: uuidv4(), name: "Haruna", email: "haru@email.com" },
    { id: uuidv4(), name: "Isaac", email: "isaac@email.com" },
  ],

  addNewUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: uuidv4() }],
    })),

  deleteUser: (id) =>
    set((state) => ({
      users:state.users.filter ((user)=>user.id!==id),
    })),
}));

export default userStore;

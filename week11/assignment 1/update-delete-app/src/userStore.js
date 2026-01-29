import { create } from "zustand";

const userStore = create((set) => ({
  users: [],
  selectedUser: null,
  isModalOpen: false,

  // OPEN MODAL (for Add)
  openModal: () =>
    set({
      isModalOpen: true,
      selectedUser: null,
    }),

  // CLOSE MODAL
  closeModal: () =>
    set({
      isModalOpen: false,
      selectedUser: null,
    }),

  // ADD USER
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: Date.now() }],
      isModalOpen: false,
    })),

  // DELETE USER
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    })),

  // SET USER TO EDIT
  setUserToEdit: (user) =>
    set({
      selectedUser: user,
      isModalOpen: true,
    }),

  // UPDATE USER
  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((u) =>
        u.id === updatedUser.id ? updatedUser : u,
      ),
      selectedUser: null,
      isModalOpen: false,
    })),
}));

export default userStore;

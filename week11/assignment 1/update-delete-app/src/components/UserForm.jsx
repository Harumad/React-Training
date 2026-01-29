import { useState, useEffect } from "react";
import userStore from "../userStore";

export default function UserForm() {
  const addUser = userStore((state) => state.addUser);
  const updateUser = userStore((state) => state.updateUser);
  const selectedUser = userStore((state) => state.selectedUser);
  const isModalOpen = userStore((state) => state.isModalOpen);
  const closeModal = userStore((state) => state.closeModal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
      setCourse(selectedUser.course);
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !course) return;

    if (selectedUser) {
      updateUser({
        id: selectedUser.id,
        name,
        email,
        course,
      });
    } else {
      addUser({ name, email, course });
    }

    setName("");
    setEmail("");
    setCourse("");
  };

  //  DO NOT RENDER MODAL IF CLOSED
  if (!isModalOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>Edit User</h3>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button type="submit">Update</button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

// Simple inline styles (no UI redesign)
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "6px",
};

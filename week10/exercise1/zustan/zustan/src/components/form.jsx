import { useState } from "react";
import userStore from "../Store/userStore";

export default function UserForm() {
  const addNewUser = userStore((state) => state.addNewUser);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    addNewUser({ name, email });

    setName("");
    setEmail("");
  };

  return (
    <div className="w-80">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label>Fullname</label>
        <input
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your fullname"
        />

        <label>Email</label>
        <input
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit" className="bg-black p-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}


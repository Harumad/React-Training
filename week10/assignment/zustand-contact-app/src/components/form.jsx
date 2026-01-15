// Form for adding a new user
import { useState } from "react";
import userStore from "../Store/userStore";

export default function UserForm() {
  // Get add action from store
  const addNewUser = userStore((state) => state.addNewUser);

  // Local form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty submission
    if (!name || !phone || !email) return;

    // Add user to store
    addNewUser({ name, phone, email });

    // Reset form fields
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-96 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input */}
        <div>
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Phone input */}
        <div>
          <label className="text-sm text-gray-600">Phone</label>
          <input
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0540000000"
          />
        </div>

        {/* Email input */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        {/* Submit button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
          Save Contact
        </button>
      </form>
    </div>
  );
}

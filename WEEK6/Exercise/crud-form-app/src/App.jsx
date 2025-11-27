import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [users, setUsers] = useState([
    { name: "Haruna", email: "runa@email.com", id: uuid() },
    { name: "Saf", email: "saf@email.com", id: uuid() },
  ]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="flex justify-center items-start mt-20 space-x-20">
    
      <UserForm addUser={addNewUser} />

    
      <UserList users={users} />
    </div>
  );
}

export default App;

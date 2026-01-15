import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {addUser} from "../slices/usersSlice"




const UserForm = () => {
  const dispatch = useDispatch ()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: uuidv4(),
      name: name,
      email: email,
    };


    dispatch(addUser(newUser))




    console.log(newUser);

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input type="submit" />
    </form>
  );
};

export default UserForm;

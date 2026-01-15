import React from "react";
import UserItem from "./UserItem.jsx";



function UserList(props) {
  return (
    <>
      <div>
        <h1>User List Component</h1>
        {props.users.map((user) => (
          <UserItem key={user.id} details={user} editUser={props.editUser} deleteUser={props.deleteUser} />
        ))}
      </div>
    </>
  );
}

export default UserList;

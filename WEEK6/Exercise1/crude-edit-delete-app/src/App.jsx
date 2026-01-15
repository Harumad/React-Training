import React, { useState } from "react";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function App() {
  const [users, setUsers] = useState([
    { name: "Haruna", email: "haruna@email.com", id: uuid() },
    { name: "Saf", email: "saf@email.com", id: uuid() },
    { name: "manf", email: "man@email.com", id: uuid() },
  ]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const editUser =(userId,newUserDetails)=>{
    console.log(userId,newUserDetails)

  }

  const deleteUser =(userId)=> {
    console.log(userId)

  }

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <UserForm adduser={addNewUser} />
            </Col>

            <Col>
              <UserList editUser={editUser} deleteUser={deleteUser} users={users} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function UserItem(props) {
  
  return (
    <>
      <h1>{props.details.name}</h1>
      <h3>{props.details.email} </h3>
    </>
  );
}

export default UserItem;

import React, {useState} from "react";
import {Button, Modal,Form} from "react-bootstrap";



function UserItem(props) {
    const [showModal,setShowModal]= useState(false);

    const [name, setName] = useState(props.details.name);
    const [email, setEmail] = useState(props.details.email);


    const handleModalState =()=>{
        setShowModal (!showModal);
    }


    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handleEdit= ()=> {
      let newUserDetails ={
        name:name,
        email:email,
      }; 

      props.editUser(props.details.id,newDetails)

    }
      
   
  return (
    <>
      <h1>{props.details.name}</h1>
      <h3>{props.details.email} </h3>



      <Button onClick={handleModalState}>Edit</Button>
      <Button onClick={()=>props.deleteUser(props.details.id)} variant="danger">Delete</Button>



      <Modal show={showModal} onHide={handleModalState}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Full Name</Form.Label>
              <Form.Control
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User Email</Form.Label>
              <Form.Control
                value={email}
                onChange={handleEmailChange}
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>


        </Modal.Body>

        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalState}>
            Close
          </Button>
          <Button onClick={handleEdit} variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default UserItem;

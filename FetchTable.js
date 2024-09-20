import { useState } from 'react';
import axios from 'axios';
import { Button, Form, Modal,} from 'react-bootstrap';

function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [Data, setData] = useState({
        name: "",
        description: "",
        quantity: "",
        expiryDate: "",
        manufacturer: ""
    })
    const handleChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    };
    const postDataHandler = async (e) => {
        e.preventdefault()
        try {
            console.log("you are in the posting section", Data);

            const response = await axios.post('http://localhost:4000/DP/product', Data);
            console.log("your data is", response.data)
        } catch (error) {
            console.log(error);
            console.log("failed to post data");
        }
    };
    const handleShow = () => setShow(true);
    return (
      <>
            <Button variant="primary" onClick={handleShow}>
                Products management
            </Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={postDataHandler}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name='name'
                                value={Data.name}
                                placeholder="name"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name='description'
                                autoFocus
                                value={Data.description}
                                placeholder="Describe about prouct"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="Number"
                                name="quantity"
                                value={Data.quantity}
                                placeholder="0-9"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ExpiryDate</Form.Label>
                            <Form.Control
                                type="Number"
                                name="expiryDate"
                                value={Data.expiryDate}
                                placeholder="DD-MM-YYY"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Manufacturer</Form.Label>
                            <Form.Control
                                type="Text"
                                name="manufacturer"
                                value={Data.manufacturer}
                                placeholder="smart-data"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        type="submit"
                        onClick={postDataHandler}
                        placeholder="Post title" >submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Example;
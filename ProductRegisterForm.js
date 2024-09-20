import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ProductRegisterForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputProduct, setInputProduct] = useState({
    productName: "",
    productType: "",
    productCompany: "",
    productPrice: "",
  });


  const onChangeEventHandle = (e) => {
    setInputProduct({ ...inputProduct, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      await axios.post(
        "http://localhost:4000/product/api/product",
        inputProduct
      );
      handleClose(false)
      window.location.relode()
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Product Registration
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="Enter Product Name"
                onChange={onChangeEventHandle}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Type/ Category</Form.Label>
              <Form.Control
                type="text"
                name="productType"
                onChange={onChangeEventHandle}
                placeholder="Enter Product Type"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Company</Form.Label>
              <Form.Control
                type="text"
                name="productCompany"
                placeholder="Enter Product Company Name"
                onChange={onChangeEventHandle}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                name="productPrice"
                min="0"
                placeholder="Price per Product"
                onChange={onChangeEventHandle}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductRegisterForm;

import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
// import BasicPagination from "./BasicPagination";
import "../App.css";

function TableForm() {
  // Declaration of states for each fields

  const [data, setData] = useState([]); 
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [manufacturer, setmanufacturer] = useState(null);

  // Fetch data from API
  const getChangeHandle = async (e) => {
    try {
      const result = await axios.get(
        "http://localhost:4000/DP/api/product"
      );
      if (result.data && result.data.item) {
        setData(result.data.item);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete data from API
  const deleteDataHandle = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/product/api/product/${id}`,

      // Update tables state to filter out the deleted item
      setData((pData) => pData.filter((item) => item._id !== id))
      )
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Run the data fetching function
  useEffect(() => {
    getChangeHandle();
  }, []);


  // Edit data from API
  const editDataHandle = async (e) => {};

  return (
    <div className="App">
      <form onSubmit={""}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Enter Product Name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            value={description}
            placeholder="Enter Category"
            onChange={(e) => setdescription(e.target.value)}
          />
          <input
            type="text"
            value={quantity}
            placeholder="Enter Company"
            onChange={(e) => setquantity(e.target.value)}
          />
          <input
            type="number"
            min={0}
            value={expiryDate}
            placeholder="Enter Price(RS)"
            onChange={(e) => setexpiryDate(e.target.value)}
          />
          <input
            type="text"
            value={manufacturer}
            placeholder="Enter Product Name"
            onChange={(e) => setmanufacturer(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr key={ele._id}>
                <td>{ele.productName}</td>
                <td>{ele.productType}</td>
                <td>{ele.productPrice}</td>
                <td>
                  <Button variant="info" onClick={() => editDataHandle(ele)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteDataHandle(ele._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        {/* <BasicPagination /> */}
      </div>
    </div>
  );
}

export default TableForm;
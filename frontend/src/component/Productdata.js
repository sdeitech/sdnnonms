import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.css';

const Productdata = () => {
    const [postData, setPostData] = useState({
        product_name: "",
        description: "",
        quantity: '',
        expiry_dt: '',
        manufacturer: ""
    });

    const [data, setData] = useState([]);
    const [editId, setEditId] = useState(null);

    // To fetch the data
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3005/api/get_product');
            console.log(response);
            
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Handle change to update the postData state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(editId, "dd");
        if(!editId){
            try {
                await axios.post('http://localhost:3005/api/create_product', postData); 
                setPostData({
                    product_name: "",
                    description: "",
                    quantity: '',
                    expiry_dt: '',
                    manufacturer: ""
                });
                fetchData();
            } catch (error) {
                console.error('Error posting data:', error);
            }
    

        }else if(editId){
            try {
                await axios.put(`http://localhost:3005/api/update/${editId}`, postData); 
                setEditId(null);
                setPostData({
                  product_name: "",
                  description: "",
                  quantity: '',
                  expiry_dt: '',
                  manufacturer: ""
                });
                fetchData(); 
              } catch (error) {
                console.error('Error updating data:', error);
              }
            } else {
              
    }}
    // Handle delete
    const handleDelete = async (_id) => {
        try {
        await axios.delete(`http://localhost:3005/api/delete/${_id}`); 
        fetchData(); 
        } catch (error) {
        console.error('Error deleting data:', error);
        }
    };

    // Handle edit
    const handleEdit = (item) => {
        console.log(item)
        setEditId(item._id);
        setPostData({
            product_name: item.product_name,
            description: item.description,
            quantity: item.quantity,
            expiry_dt: item.expiry_dt,
            manufacturer: item.manufacturer
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Product Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="product_name"
                    placeholder="Product Name"
                    value={postData.product_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={postData.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={postData.quantity}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="expiry_dt"
                    placeholder="Expiry Date"
                    value={postData.expiry_dt}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="manufacturer"
                    placeholder="Manufacturer"
                    value={postData.manufacturer}
                    onChange={handleChange}
                    required
                />
                <button type="submit" >{editId ? "Update" : "Add"} Product</button>
            </form>

            <h2>Products Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Expiry Date</th>
                        <th>Manufacturer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.product_name}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.expiry_dt}</td>
                            <td>{item.manufacturer}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default Productdata;


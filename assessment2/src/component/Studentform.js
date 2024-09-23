import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function ProductDetails() {
    const [productData, setProductData] = useState({
        productName: '',
        quantity: '',
        description: '',
        manufacturer: '',
        expiry: ''
    });
    
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentProductId, setCurrentProductId] = useState(null);

    const fetchProducts = async () => {
        try {
            const result = await axios.get("http://localhost:4000/product");
            setData(result.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editMode) {
            await updateProduct(currentProductId);
        } else {
            await createProduct();
        }
        resetForm();
    };

    const createProduct = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/product', productData);
            setData(prevData => [response.data, ...prevData]);
        } catch (error) {
            console.error("Error creating product", error);
        }
    };

    const updateProduct = async (id) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/product/${id}`, productData);
            setData(data.map(item => (item._id === id ? response.data : item)));
            setEditMode(false);
        } catch (error) {
            console.error("Error updating product", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/product/${id}`);
            setData(data.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting product", error);
        }
    };

    const editProduct = (product) => {
        setProductData(product);
        setEditMode(true);
        setCurrentProductId(product._id);
    };

    const resetForm = () => {
        setProductData({
            productName: '',
            quantity: '',
            description: '',
            manufacturer: '',
            expiry: ''
        });
        setEditMode(false);
        setCurrentProductId(null);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Product Name:</label>
                    <input
                        type='text'
                        value={productData.productName}
                        name='productName'
                        placeholder='Enter product name'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Quantity:</label>
                    <input
                        type='number'
                        value={productData.quantity}
                        name='quantity'
                        placeholder='Quantity of the product'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={productData.description}
                        name='description'
                        placeholder='Description of the product'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Manufacturer:</label>
                    <input
                        type="text"
                        value={productData.manufacturer}
                        name='manufacturer'
                        placeholder='Manufacturer of the product'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Expiry:</label>
                    <input
                        type="date"
                        value={productData.expiry}
                        name='expiry'
                        placeholder='Expiry of the product'
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>{editMode ? 'Update' : 'Submit'}</button>
                {editMode && <button type='button' onClick={resetForm}>Cancel</button>}
            </form>

            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Manufacturer</th>
                        <th>Expiry</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele) => (
                        <tr key={ele._id}>
                            <td>{ele.productName}</td>
                            <td>{ele.quantity}</td>
                            <td>{ele.description}</td>
                            <td>{ele.manufacturer}</td>
                            <td>{ele.expiry}</td>
                            <td>
                                <button onClick={() => deleteProduct(ele._id)}>Delete</button>
                                <button onClick={() => editProduct(ele)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductDetails;


import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [product, setProd] = useState([]);
    const [name, setname] = useState('');
    const [quantity, setquantity] = useState('');
    const [manufacturer, setmanufacturer] = useState('');
    const [description, setdescription] = useState('');


    useEffect(() => {
        axios.get("http://localhost:4000/product")
            .then(response => setProd(response.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {product.map(products => (
                    <li key={products.id}>{products.name}-{products.quantity}-{products.description}</li>
                ))}
            </ul>
        </div>
    )
}
export default Product;
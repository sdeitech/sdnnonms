import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const FetchProduct = () => {
    const [prodData, setProdData] = useState([]);
    const [postData, setPostdata] = useState({
        product_name: "",
        description: "",
        quantity: '',
        expiry_dt: '',
        manufacturer: ""
    });
    // const [editProduct, seteditProduct] = useState(null);
    // const [viewProduct, setviewProduct] = useState(null);
    const [getData, setGetData] = useState([]);



    const handleChange = (e) => {
        const { name, value } = e.target.value;
        setProdData({
            ...prodData
        });
    };

    const getdata = async () => {
        try {
            const response = await axios.get("http://localhost:3005/api/get_product");
            console.log(response.getData);
            setGetData(response.getData);
        } catch (error) {
            setGetData([]);
        } finally {

        }
    }

    // const postdata = async () => {
    //     try {
    //         const response = await axios.post("http://localhost:4000/product", {
    //             product_name: postData,
    //             description: "",
    //             quantity: "",
    //             expiry_dt: "",
    //             manufacturer: ""
    //         });
    //         setGetData(prevgetData => [response.getData, ...getData]);
    //     } catch {

    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product data submitted:', prodData);
    };

    useEffect(() => {
        getdata();
    }, []);
    return (
            // <div className='Get'>
            <div>
                <h1>Product Management</h1>
                <p>Product List</p>
                {/* <button onClick={()=>getdata()}>GET DATA</button>

            </div>
        
            {getData.length > 0 && (
                <ul>
                    {getData.slice(0, 4).map(product => (
                        <li key={product.id}>{product.id}{product.product_name}</li>

                    ))}
                </ul> */}
            
                {/* <form className='form'>
                    <div className='form-group'>
                        <label>Product_name : </label>
                        <input
                            type='text'
                            name='name'
                            value={prodData.name}
                            placeholder='Enter the product name:'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <textarea
                            type='text'
                            name='description'
                            // value={prodData.description}
                            placeholder='Enter the description of the product:'
                            onChange={handleChange}
                            cols='34'
                            rows='2' />

                    </div>
                    <div className='form-group'>
                        <label>Quantity: </label>
                        <textarea
                            name='quantity'
                            // value={prodData.quantity}
                            placeholder='Enter the quantity of the product:'
                            onChange={handleChange}
                            cols='34'
                            rows='2' />
                    </div>
                    <div className='form-group'>
                        <label>Manufacturer</label>
                        <textarea
                            name='manufacturer'
                            // value={prodData.manufacturer}
                            placeholder='Enter the name of manufacturer'
                            onChange={handleChange}
                            cols='34'
                            rows='2' />
                    </div>
                    <div className='form-group'>
                        <label>Expiry_dt: </label>
                        <textarea
                            name='expiry_dt'
                            // value={prodData.expiry_dt}
                            placeholder='Enter the expiry date of a product'
                            onChange={handleChange}
                            cols='34'
                            rows='2' />

                    </div>
                    <button type='submit' onChange={handleSubmit}>POST DATA</button>
                </form> */}
                <table>
                    <thead>
                        <tr>
                            <th>product_name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Expiry_dt</th>
                            <th>Manufacturer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prodData.map((product,key) => {
                            return(
                            <tr key={key}>
                                <td>{product.product_name}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                                <td>{product.expiry_dt}</td>
                                <td>{product.manufacturer}</td>
            
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
            );
        }
export default FetchProduct;
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function Productdetails() {
    const [data, setData] = useState([]);
    const [productData, setproductData] = useState({
        productName: '',
        price: '',
        description: ''
    });

    // const updateProduct = async () => {
    //     const response = await axios.put("http://localhost:4000/product/")
    // }
    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/product/${id}`);
            setData(data.filter((data) => data.id !== id));
            console.log(response,"hfjfgajhf");
        }
        catch (error) {
            console.log("data is not deleted");
        }

    }

    const getProduct = async () => {

        const result = await axios.get("http://localhost:4000/product/", {
            validateStatus: function (status) {
                // if this function returns true, exception is not thrown, so
                // in simplest case just return true to handle status checks externally.
                return true;
            }
        });
        setData(result?.data?.findProduct);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setproductData({ ...productData, [name]: value })
    }

    const postProduct = async (e) => {
        try {
            e.preventDefault()
            const res = await fetch('http://localhost:4000/product', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)

            })
            .then((response) => response.json())
            setData(prevData => [res.data, ...data]);
        }
        catch (error) {
            console.log("product is not posted");
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div>
            <form className="form-container" onSubmit={postProduct}>
                <div className='form-group'>
                    <label>productName::</label>
                    <input
                        type='text'
                        value={productData.productName}
                        name="productName"
                        placeholder='enter the product name'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label> price::</label>
                    <input

                        type='number'
                        value={productData.price}
                        name='price'
                        placeholder='price of the product'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label> description::</label>
                    <textarea
                        type="text"
                        value={productData.description}
                        name='description'
                        placeholder='description of the product'
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Submit</button>

            </form>

            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th> PRODUCT NAME</th>
                        <th> PRICE</th>
                        <th> DESCRIPTION </th>
                        <th> ACTION </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((ele, index) => {
                        return (

                            <tr key={ele._id}>
                                <td>{ele.productName}</td>
                                <td>{ele.price}</td>
                                <td>{ele.description}</td>
                                <td>
                                    <button onClick={() => deleteProduct(ele._id)}> DELETE</button>
                                    <button > UPDATE </button>
                                </td>
                            </tr>)

                    })}
                </tbody>

            </table>
        </div>
    );
}
export default Productdetails;

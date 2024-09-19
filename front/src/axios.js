import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
    // State for GET request
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // State for POST request
    const [postContent, setPostContent] = useState('');
    const [postError, setPostError] = useState(null);

    // Fetch initial data
    const fetchData = async () => {
        // setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response.data)
            setData(response.data);
            // setError(null);
        } catch (error) {
            setData([]);
            // setError('Failed to fetch data.');
        } finally {
            // setLoading(false);
        }
    };

    // Handle POST request
    const postDataHandler = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: postContent,
                body: 'This is a new post',
                userId: 1,
            });

            // Append the new post to the existing data
            setData(prevData => [response.data, ...data]);
            // setPostError(null);
            // setPostContent(''); // Clear the input field
        } catch (error) {
            setPostError('Failed to post data.');
        }
    };

    // Load data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Axios GET and POST Example</h1>

            {/* GET Request */}
            {/* <button onClick={fetchData}>Fetch Data</button> */}
            {data.length > 0 && (
                <ul>
                    {data.slice(0, 5).map(p => (
                        <li key={p.id}>{p.id} {p.title}</li>
                    ))}
                </ul>
            )}

            {/* POST Request */}
            <input
                type="text"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Post title"
            />
            <button onClick={postDataHandler}>Post Data</button>
            {postError && <p style={{ color: 'red' }}>{postError}</p>}
        </div>
    );
};

export default DataFetcher;
import React, { useState } from 'react';
import '../styles/userManagement.css'; // Import the CSS file

function UserCrud() {
    // State to manage users
    const [users, setUsers] = useState([]);
    // State to manage input fields for a new user
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Male');
    // State to manage the current user being edited
    const [editUser, setEditUser] = useState(null);
    // State to manage input fields during editing
    const [editFirstName, setEditFirstName] = useState('');
    const [editLastName, setEditLastName] = useState('');
    const [editGender, setEditGender] = useState('Male');
    // State to manage the user being viewed
    const [viewUser, setViewUser] = useState(null);

    // Function to add a new user
    const addUser = () => {
        if (firstName.trim() === '' || lastName.trim() === '') return;

        // console.log("Users==", users, "firstname==", firstName)
        setUsers([...users, {
            id: Date.now(),
            firstName,
            lastName,
            gender
        }]);
        setFirstName('');
        setLastName('');
        setGender('Male');
    };

    // Function to start editing a user
    const startEditing = (user) => {
        console.log("user==")
        setEditUser(user);
        setEditFirstName(user.firstName);
        setEditLastName(user.lastName);
        setEditGender(user.gender);
    };

    // Function to update a user
    const updateUser = () => {
        if (editFirstName.trim() === '' || editLastName.trim() === '') return;

        setUsers(users.map(user =>
            user.id === editUser.id
                ? { ...user, firstName: editFirstName, lastName: editLastName, gender: editGender }
                : user
        ));
        setEditUser(null);
        setEditFirstName('');
        setEditLastName('');
        setEditGender('Male');
    };

    // Function to cancel editing
    const cancelEditing = () => {
        setEditUser(null);
        setEditFirstName('');
        setEditLastName('');
        setEditGender('Male');
    };

    // Function to view user details
    const viewUserDetails = (user) => {
        setViewUser(user);
    };

    // Function to clear the view user
    const clearViewUser = () => {
        setViewUser(null);
    };

    // const handleChildComponent = (a, b) => {
    //   alert(a)
    // }

    return (
        <div className="user-management">
            <h1>User Management</h1>

            {/* Add User */}
            <div className="add-user">
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                />
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <button onClick={addUser}>Add User</button>
            </div>

            {/* List Users */}
            <table className="user-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button onClick={() => startEditing(user)}>Edit</button>
                                <button onClick={() => viewUserDetails(user)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit User */}
            {editUser && (
                <div className="edit-user">
                    <h2>Edit User</h2>
                    <input
                        type="text"
                        value={editFirstName}
                        onChange={(e) => setEditFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        value={editLastName}
                        onChange={(e) => setEditLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                    <select
                        value={editGender}
                        onChange={(e) => setEditGender(e.target.value)}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <button onClick={updateUser}>Update</button>
                    <button onClick={cancelEditing}>Cancel</button>
                </div>
            )}

            {/* View User Details */}
            {viewUser && (
                <div className="view-user">
                    <h2>User Details</h2>
                    <p>First Name: {viewUser.firstName}</p>
                    <p>Last Name: {viewUser.lastName}</p>
                    <p>Gender: {viewUser.gender}</p>
                    <button onClick={clearViewUser}>Close</button>
                </div>
            )}

        </div>

    );
}

export default UserCrud;

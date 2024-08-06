import React, { useState } from 'react';
import '../styles/UserAccessControl.css';


function UserAccessControl() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        setNewUser({ name: '', email: '', role: '' });
    };

    return (
        <div className="user-access-control">
            <h3>User Access Control</h3>
            <p>Manage user roles and access controls.</p>
            <div className="controls-container">
                <div className="control">
                    <h4>Add New User</h4>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newUser.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={handleInputChange}
                    />
                    <select
                        name="role"
                        value={newUser.role}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="Viewer">Viewer</option>
                    </select>
                    <button onClick={handleAddUser}>Add User</button>
                </div>
                <div className="control">
                    <h4>Current Users</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default UserAccessControl;

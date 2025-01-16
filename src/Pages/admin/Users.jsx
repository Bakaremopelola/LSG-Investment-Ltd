import { useState, useEffect } from 'react';
import './User.css';

const Users = () => {
  // Example state for user data
  const [users, setUsers] = useState([]);

  // Example function to fetch users (replace with actual data fetching logic)
  useEffect(() => {
    // Simulated data fetch
    const fetchData = async () => {
      // Replace with actual API call or data fetching logic
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="users">
      <h1>Users</h1>

      <div className="users-list">
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>

      <div className="user-actions">
        <h2>User Actions</h2>
        <button onClick={() => alert('Add new user')}>Add User</button>
        <button onClick={() => alert('Delete user')}>Delete User</button>
      </div>
    </div>
  );
};

export default Users;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/users/${id}`)
      .then(() => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        setError('Failed to delete user');
      });
  };

  const handleShow = (id) => {
    navigate(`/show/${id}`)
  }



  if (loading) return <div className="text-center mt-4 text-white">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-4">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 m-14">
      <table className="min-w-full bg-black border border-gray-700 rounded-xl shadow-lg text-white">
        <thead>
          <tr className="bg-[#00df9a] text-black uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">E-mail</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-300 text-sm font-light">
          {users.map(user => (
            <tr key={user.id} className="border-b border-gray-700 hover:bg-[#00df9a] hover:text-black transition duration-300">
              <td className="py-3 px-6 text-xl">{user.name}</td>
              <td className="py-3 px-6 text-xl">{user.email}</td>
              <td className="py-3 px-6 text-center">
                <button 
                  onClick={() => handleDelete(user.id)} 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full"
                >
                  Delete
                </button>
                <button 
                  onClick={() => handleShow(user.id)} 
                  className="bg-green-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full"
                >
                  Show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

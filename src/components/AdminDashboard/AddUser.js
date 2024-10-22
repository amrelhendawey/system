import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onClose, showModalAnimation }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', gender: '' });

  const handleInputChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          const response = await axios.post(
              'http://localhost/MyPHPWebsite/api/create.php',
              `username=${formData.username}&email=${formData.email}&password=${formData.password}&gender=${formData.gender}`,
              { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
          );

          console.log(response.data.message);
          onClose(); // Close modal after success
      } catch (error) {
          console.error('Error creating user:', error);
      }
  };

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className={`modal-box relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-out ${showModalAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <form onSubmit={handleSubmit}>
                  <button
                      type="button"
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      onClick={onClose}
                  >
                      ✕
                  </button>
                  <h3 className="font-bold text-lg">Add User</h3>
                  <div className="form-control">
                      <label className="label">Username</label>
                      <input
                          type="text"
                          name="username"
                          className="input input-bordered"
                          value={formData.username}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div className="form-control">
                      <label className="label">Email</label>
                      <input
                          type="email"
                          name="email"
                          className="input input-bordered"
                          value={formData.email}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div className="form-control">
                      <label className="label">Password</label>
                      <input
                          type="password"
                          name="password"
                          className="input input-bordered"
                          value={formData.password}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div className="form-control">
                      <label className="label">Gender</label>
                      <select
                          name="gender"
                          className="select select-bordered"
                          value={formData.gender}
                          onChange={handleInputChange}
                      >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                  </div>
                  <div className="modal-action mt-4">
                      <button type="submit" className="btn">Add User</button>
                  </div>
              </form>
          </div>
      </div>
  );
};

export default AddUser;

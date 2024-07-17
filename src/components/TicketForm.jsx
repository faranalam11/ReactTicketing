
import React, { useState } from 'react';

const TicketForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    channal: '',
    subject: '',
    status: '',
    priority: '',
    date: '' // This will be filled with current date on form submit
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    onSubmit({ ...formData, date: currentDate });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl mb-4">Add New Ticket</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-2 p-2 border"
            required
          />
          <select
            name="channal"
            value={formData.channal}
            onChange={handleChange}
            className="mb-2 p-2 border"
            required
          >
            <option value="" disabled>Select channal</option>
            <option value="MAIL">MAIL</option>
            <option value="CHAT">CHAT</option>
            <option value="CALL">CALL</option>
          </select>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="mb-2 p-2 border"
            required
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mb-2 p-2 border"
            required
          >
            <option value="" disabled>Select Status</option>
            <option value="RES">Resolved</option>
            <option value="PEN">Pending</option>
            <option value="OPN">Open</option>
          </select>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="mb-2 p-2 border"
            required
          >
            <option value="" disabled>Select Priority</option>
            <option value="L">Low</option>
            <option value="M">Medium</option>
            <option value="H">High</option>
          </select>
          {/* Date input is removed as it's filled automatically */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
          <button type="button" onClick={onClose} className="ml-2 bg-red-500 text-white p-2 rounded">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;

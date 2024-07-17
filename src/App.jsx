import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TicketList from './components/TicketList';
import TicketForm from './components/TicketForm';
import './index.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  //new
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedTickets = localStorage.getItem('tickets');
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);
// new 
  const filteredTickets = tickets.filter(ticket =>
    ticket.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.priority.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addTicket = (newTicket) => {
    const updatedTickets = [...tickets, newTicket];
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  // new 
  const removeTicket = (ticketId) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="flex">
      <Sidebar onAddTicketClick={handleShowForm} />
      <div className="flex-1">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TicketList tickets={filteredTickets} onRemoveTicket={removeTicket} />
        {showForm && (
          <TicketForm onSubmit={addTicket} onClose={() => setShowForm(false)} />
        )}
      </div>
    </div>
  );
};

export default App;

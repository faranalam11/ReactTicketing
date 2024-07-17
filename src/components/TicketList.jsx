// src/components/TicketList.js
import React from 'react';
import TicketItem from './TicketItem';

const TicketList = ({ tickets }) => {
  return (
    <div>
      {tickets.map((ticket, index) => (
        <TicketItem key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;

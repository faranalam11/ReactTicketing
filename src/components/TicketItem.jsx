// src/components/TicketItem.js
import React, { useState } from "react";
import { ArchiveIcon, ChatIcon, MailIcon, PencilAltIcon, PhoneIcon, TrashIcon } from "@heroicons/react/outline";
// import ConfirmationModal from './ConfirmationModal';

// const TicketItem = ({ ticket }) => {
  const TicketItem = ({ ticket, onRemoveTicket }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleDeleteClick = () => {
      setIsModalOpen(true);
    };
  
    const handleConfirmDelete = () => {
      onRemoveTicket(ticket.id);
      setIsModalOpen(false);
    };
  
    const handleCancelDelete = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="bg-white font-serif flex justify-between items-center p-2 m-1 rounded-lg cursor-pointer hover:bg-gray-100 ">
      <input type="checkbox" className="mr-2" />
      <span className="flex-1">{ticket.email.slice(0, 25)}</span>
      
      <span className="w-6 rounded h-6 mr-5">
        {ticket.channal === 'MAIL' ? <MailIcon /> : ticket.channal === 'CALL' ? <PhoneIcon /> : <ChatIcon />}
      </span>
      <span className=" text-xs bg-red-200 rounded  mr-10 p-1">{ticket.channal}</span>
      <span className="flex-1 mx-5">{ticket.subject.slice(0, 30)}</span>
      <span className={` text-xs ${ticket.status === 'RES' ? 'bg-yellow-100' : ticket.status === 'OPN' ? 'bg-yellow-200' : 'bg-yellow-400'} rounded  mr-10 p-1`}>{ticket.status}</span>
      <span className=" mx-10"><ArchiveIcon className="w-5 h-5" /></span>
      <span className={` text-xs ${ticket.priority === 'L' ? 'bg-green-100' : ticket.priority === 'M' ? 'bg-green-200' : 'bg-green-400'} rounded  mr-10 p-1`}>{ticket.priority}</span>
      <span className="flex-1 ">{ticket.date}</span>
      <span className="bg-red-400 rounded mx-1"><TrashIcon className="w-5 h-5" /></span>
      <span className="bg-blue-400 rounded"><PencilAltIcon className="w-5 h-5" /></span>
    </div>
  );
};

export default TicketItem;

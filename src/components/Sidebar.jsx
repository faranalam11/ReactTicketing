import { FolderAddIcon, PlusCircleIcon } from '@heroicons/react/outline';
import React from 'react';

const Sidebar = ({onAddTicketClick}) => {
  return (
    <div className="flex flex-col h-screen w-80 bg-white border-x-2 rounded text-black">
      <div className="flex items-center">
        <span className="flex-1 text-blue-600 text-2xl ml-2 p-3">Views</span>
        <button className='hover:bg-blue-300 cursor-pointer'><FolderAddIcon className='w-8 h-8 flex'/></button>
        <button 
          className='hover:bg-blue-300 cursor-pointer' 
          onClick={onAddTicketClick}
        >
          <PlusCircleIcon className='w-8 h-8 flex' />
        </button></div>

      <hr className="border-black-500" />
      <ul className="flex flex-col my-3 ">
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2">Unassigned</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2">All pendings</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2">All completed</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2">All junks</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2">Assigned to me</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2">Created By me</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2">Completed by me</li>
      </ul>
      <hr className="border-black-500" />
      <h3 className='my-3 mx-2'>Filter saved for Designation</h3>
      <div className='flex border-2'>
      <select className="p-1 border border-gray-300 rounded">
            <option>50</option>
            <option>100</option>
            <option>500</option>
          </select>
      </div>
     
    </div>
  );
};

export default Sidebar;

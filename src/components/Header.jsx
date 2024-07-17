// src/components/Header.js
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, DotsVerticalIcon, ViewListIcon, ViewGridIcon } from '@heroicons/react/outline';

const Header = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <header className="fixed top-0 z-10 w-full text-sm flex items-center p-2 bg-white border-b border-gray-300">
      
        <input type="checkbox" className="mr-2" />
        
        <input type="text"
        placeholder="Search tickets..."
        value={searchQuery}
        onChange={handleSearchChange} className="flex-1 p-2 border border-gray-300 rounded mr-2"/>
        
        <div className="flex items-center space-x-2">
          <label className="text-sm">Show</label>
          <select className="p-1 border border-gray-300 rounded">
            <option>50</option>
            <option>100</option>
            <option>500</option>
          </select>
          <span> <span>0-50</span> of 995</span>
      
        <button className="p-2 border border-gray-300 rounded">
          <ChevronLeftIcon className="w-3 h-3" />
        </button>

        <span className=''> <input type="text" className='w-10 h-7 rounded' value="1"/> of 99</span>
        <button className="p-2 border border-gray-300 rounded">
          <ChevronRightIcon className="w-3 h-3" />
        </button>

        <select className="p-1 border border-gray-300 rounded">
          <option>Last Conversation</option>
          <option>Due</option>
          <option>Create</option>
          <option>Call Back</option>
          <option>Follow up</option>
          <option>Resolution</option>
        </select>
        <button className="p-2 border border-gray-300 rounded">
          <DotsVerticalIcon className="w-3 h-3" />
        </button>

        <div>
          <button className="p-2 border border-gray-300 rounded">
            <ViewListIcon className="w-3 h-3" />
          </button>
          <button className="p-2 border border-gray-300 rounded">
            <ViewGridIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

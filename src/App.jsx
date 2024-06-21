import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import BankDetails from './components/BankDetails';
import { useLockBodyScroll } from '@custom-react-hooks/all';
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useLockBodyScroll(sidebarOpen);

  return (
<div className=''>
  <nav className='hidden md:block'>
        <div className='w-full flex justify-between p-3 border'>
          <div className='font-semibold'>Logo</div>
          <div className='font-semibold'>Home</div>
          <div className='font-semibold'>Services</div>
          <div className='font-semibold'>Blog</div>
          <div className='font-semibold'>Offers</div>
          <div className='font-semibold'>About Us</div>
          <div className='font-semibold'>
            <div className='flex justify-between gap-5'>
              <p><CiSearch size={30} /></p>
              <p><CiBellOn size={30} /></p>
              <p><RiAccountCircleLine size={30} /></p>
            </div>
          </div>
        </div>
  </nav>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col">
          <header className="lg:hidden bg-white shadow-md flex justify-between items-center p-4">
            <button
              className=" p-2 rounded-md "
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
          </header>
          <main className="flex-1 p-6">
            <BankDetails   />
          </main>
        </div>
      </div>
</div>
  );
}

export default App;

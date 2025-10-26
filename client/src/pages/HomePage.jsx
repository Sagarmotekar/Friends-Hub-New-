import React, { useContext, useState } from 'react'
import SideBar from '../components/SideBar'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'
import { ChatContext } from '../../context/ChatContext'
// import {useContext} from 'react'

const HomePage = () => {

  const {selectedUser} = useContext(ChatContext);
  return (
    // Outer container: Deep, dark background
    <div className='bg-gray-900 min-h-screen p-4 sm:p-8 flex justify-center items-center'> 
      
      {/* Main chat wrapper: centers the chat box and adds a max-width */}
      <div className='w-full max-w-7xl h-full'> 
        
        {/* Chat box content: Black background, glowing blue/purple border, modern rounded corners */}
        <div 
          className={`
            bg-gray-950 
            rounded-3xl 
            shadow-[0_0_80px_-15px_rgba(109,40,217,0.7)] 
            overflow-hidden 
            h-[90vh] 
            min-h-[600px] 
            grid 
            grid-cols-1 
            relative 
            border-2 border-indigo-700/50 
            transition-all duration-500
            ${selectedUser 
              ? 'md:grid-cols-[280px_1fr_300px] xl:grid-cols-[300px_1fr_320px]' 
              : 'md:grid-cols-[280px_1fr]'
            }
          `}
        >
          
          {/* Apply a subtle gradient overlay across the component (optional, but highly attractive) */}
          <div className='absolute inset-0 pointer-events-none opacity-10' 
               style={{ 
                 backgroundImage: 'radial-gradient(at 0% 100%, #1e3a8a, transparent), radial-gradient(at 100% 0%, #6d28d9, transparent)'
               }}
          ></div>
          
          <SideBar/>
          <ChatContainer />
          <RightSideBar/>
        </div>
        
      </div>
    </div>
  )
}

export default HomePage
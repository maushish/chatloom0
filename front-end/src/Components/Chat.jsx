import React from 'react'
import { useLocation } from 'react-router-dom';

function Chat() {
  const location = useLocation();
  const avatar = new URLSearchParams(location.search).get('avatar');


  return (
    <div className='bg-mainBlack h-screen flex flex-col items-center justify center '>
      {/*whole chat thing*/}
      <div className='rounded-xl border border-gray-300 opacity-25 bg-gradient-to-r from-opacity-80 to-opacity-85 from-black to-black flex flex-col items-center justify-center w-[60%] ml-[38%] mt-[3%] h-[92%]'>
        <div>Name</div>
        <div>Chat</div>
        <div>emoji, typing</div>


      </div>
      {/*Profiles Section */}
      <div className='rounded-xl border border-gray-300 opacity-25 bg-gradient-to-r from-opacity-80 to-opacity-85 from-black to-black flex flex-col items-center justify-center w-[30%] mr-[60%] h-[50%] mt-[-54%] xl:mt-[-35%]'>
        {/*USER'S PROFILE */}
        <div>
          {avatar ? (
            <img src={avatar} alt="Avatar" />
          ) : (
            <div>No Avatar</div>
          )}
        </div>
      </div>
      <div>

        {/*All profiles  */}
      </div>

    </div>

  )
}

export default Chat
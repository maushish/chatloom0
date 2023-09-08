import React from 'react';
import convo from '../Logo/chatting.svg'
import pfp from '../Logo/pfp.svg'

function Chat() {
  return (
    <div className='bg-mainBlack h-screen flex flex-col items-center justify-center'>
      {/* Whole chat thing */}
      <div className='rounded-xl border border-gray-300 opacity-25 bg-gradient-to-r from-opacity-80 to-opacity-85 from-black to-black flex flex-col items-center justify-center w-[60%] ml-[38%] mt-[3%] h-[92%]'>
        <div>Name</div>
        <div>Chat</div>
        <div>emoji, typing</div>
      </div>
      {/* Profiles Section */}
      <div className='rounded-xl border border-gray-300 opacity-25 bg-gradient-to-r from-opacity-80 to-opacity-85 from-black to-black flex flex-col items-center justify-center w-[30%] mr-[60%] h-[50%] mt-[-54%] xl:mt-[-35%]'>
        {/* USER'S PROFILE */}
        <div>
          <div className='w-[40vh] h-[8vh] bg-customGreen rounded-lg mt-[-100%]'>
            <div></div>
            <div className='z=10 opacity-100'>
              <a>
                <img src={convo} className='h-[8vh] ml-20'></img>
              </a>
            </div>
            <div>
            <a>
                <img src={pfp} className='h-[6vh] ml-60 mt-[-17%]'></img>
              </a>
            </div>

          </div>
          
        </div>
      </div>
      <div>
        {/* All profiles */}
      </div>
    </div>
  );
}

export default Chat;

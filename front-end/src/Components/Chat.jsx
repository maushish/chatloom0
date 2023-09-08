import React, { useState } from 'react';
import convo from '../Logo/chatting.svg';
import pfp from '../Logo/pfp.svg';

function Chat() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const submitWalletAddress = () => {
    // Handle the submission of the wallet address here (e.g., send it to a server).
    // You can also close the pop-up after submitting.
    setIsPopupOpen(false);
  };

  return (
    <div className='bg-mainBlack h-screen flex flex-col items-center justify-center'>
      {/* Whole chat thing */}
      <div className='rounded-xl border border-gray-300 opacity-25 bg-gradient-to-r from-opacity-80 to-opacity-85 from-black to-black flex flex-col items-center justify-center w-[60%] ml-[38%] mt-[3%] h-[78%]'>
        <div>Name</div>
        <div>Chat</div>
        <div>emoji, typing</div>
      </div>
      {/* Profiles Section */}
      <div>
        <div className='w-[40vh] h-[8vh] bg-customGreen rounded-lg mt-[-190%] ml-[-150%]'>
          <div></div>
          <div className='z-10'>
            <a onClick={togglePopup}>
              <img src={convo} className='h-[8vh] ml-20' alt='Convo' />
            </a>
          </div>
          <div>
            <a onClick={togglePopup}>
              <img src={pfp} className='h-[6vh] ml-60 mt-[-17%]' alt='PFP' />
            </a>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className='text-white popup h-[70%] w-[30%] bg-mainBlack border-2 rounded-lg opacity-100 z-10 mt-[-40%] ml-[-60%]'>
          <div className='popup-content opacity-100 z-20 flex flex-col items-center justify-center'>
            <h2 className='text-4xl py-8'>Enter Wallet Address</h2>
            <input
              type='text'
              placeholder='Wallet Address'
              value={walletAddress}
              className='pl-3 round-lg text-black border-3 border-customGreen border rounded-lg'
              onChange={handleWalletAddressChange}
            />
            <button onClick={setWalletAddress} className='mt-9 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800'>
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Add friend
              </span>
            </button>
            <button onClick={togglePopup} type='button' className='mt-9 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Close</button>
            <div className='relative w-full pb-[43%]'>
              <iframe src='https://giphy.com/embed/l3fZG4tZuHMzap9N6' className='absolute inset-0 w-full h-full' frameBorder='0' allowFullScreen></iframe>
            </div>
            <p><a href='https://giphy.com/gifs/starwars-movie-star-wars-l3fZG4tZuHMzap9N6'>via GIPHY</a></p>
          </div>
        </div>
      )}
      <div className='rounded-xl border border-gray-300 opacity-25 bg-gradient-to-r from-opacity-80 to-opacity-85 from-black to-black flex flex-col items-center justify-center w-[30%] mr-[60%] h-[50%] mt-[-54%] xl:mt-[-29%]'>
        {/* USER'S PROFILE */}
      </div>
      <div>
        {/* All profiles */}
      </div>
    </div>
  );
}

export default Chat;

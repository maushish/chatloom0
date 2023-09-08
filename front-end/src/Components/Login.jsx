import React, { useState,useEffect } from 'react';
import ava from "../Images/avatar.jpeg"
import MatrixRainBackground from './Matrix';
import {useHistory} from 'react-router-dom'


function Login() {
  //Metamask installation
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  }, []);

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } else {
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCurrentWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to Metamask using the connect button");
        }
      } else {
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const addWalletListener = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        window.ethereum.on("accountsChanged", (accounts) => {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        });
      } else {
        setWalletAddress("");
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };


  //-----x------Avatar image-------//
  const [avatar, setAvatar] = useState(null);
  const avatarInputRef = React.createRef();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const openAvatarInput = () => {
    avatarInputRef.current.click();
  };

  const History =useHistory();

  const handleFinish = () => {
    History.push(`/nextpage?avatar=${encodeURIComponent(avatar)}`);
  };

  //CSS FOR MATRIX EFFECT
  const containerStyle = {
    position: 'relative',
    height: '100vh',
  };

  const matrixRainStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -10, 
    opacity: 3, 
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10, 
    background: 'rgba(0, 0, 0, 0.7)', // Background color for content

  };

  return (
    <div style={containerStyle}>
    <div style={matrixRainStyle}>
      <MatrixRainBackground />
    </div>
    <div className="absolute inset-0 bg-mainBlack opacity-0"></div>

      <div  style={contentStyle} className='bg-mainBlack flex flex-col justify-center h-screen'>
      <div className='text-txt1 mt-[-8%]'>
        <h1 className='px-10 text-5xl'>Set up your profile!</h1>
        <h2 className='text-4xl px-10 py-5'>
          in <span className='text-customGreen font-bold'>1 </span>simple step
        </h2>
      </div>
      <div className='flex flex-co items-center justify-center'>
      <div className='container-div relative'>
      <div className='bg-black-gradient relative px-4 py-2 rounded-xl top-8 z-5 w-20 ml-[5%] text-txt1'>About</div>
        <div className='bg-form w-96 p-10  z-0 rounded-lg text-txt1 mt-[3%] flex flex-col justify-center items-center'>
          <form className='flex flex-col justify-center items-center py-0'>
            <div className='flex flex-col'>
            <label className='py-2' htmlFor='avatar' onClick={openAvatarInput} style={{ cursor: 'pointer' }}>
                <span className='font-semibold text-lg'>Avatar</span>
              </label>
              <div className='relative w-16 h-16 rounded-full overflow-hidden mt-2' onClick={openAvatarInput} style={{ cursor: 'pointer' }}>
                <img
                  src={avatar || ava}
                  alt='Image'
                  className='object-cover w-full h-full'
                />
              </div>
              <input
                type='file'
                accept='image/*'
                onChange={handleAvatarChange}
                id='avatar'
                name='avatar'
                className='absolute top-0 left-0 w-2 h-2 opacity-0 cursor-pointer'
                ref={avatarInputRef}
              />
              <label className='py-4' htmlFor='username'>
                <span className='font-semibold text-lg'>Name</span>
              </label>
              <input
                className='rounded-md text-black pl-2'
                type='text'
                id='username'
                name='username'
                placeholder='Your username'
              />
              <label className='py-4' htmlFor='bio'>
                <span className='font-semibold text-lg'>Bio</span>
              </label>
              <textarea
                className='rounded-md py-2 px-2 text-black text-sm'
                id='bio'
                name='bio'
                placeholder='Bio (Enter key for line breaks)'
              />
            </div>
          </form>
        </div>
      </div>
      </div>
      <a className='mt-[2%] md:ml-[45%]  xl:ml-[48%]' href='/Chat'>
        <button className='px-4 py-2 bg-white rounded-md  hover:bg-black-gradient hover:text-white transition duration-950 hover:py-3 hover:px-5  border-2' onClick={connectWallet && handleFinish}>Finish</button>
      </a>
    </div>
    </div>
  );
}

export default Login;

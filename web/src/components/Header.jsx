import React from 'react';
import Logo from '../assets/logo.png';

const Header = () =>{

    return(
        <div className='h-14 border flex flex-row items-center p-3 justify-between'>
            <div className='flex flex-row items-center'>
                <span className='material-symbols-outlined text-gray-600 cursor-pointer' onClick={()=>{
                    document.getElementById("sidebar").style.left = "0px";
                }}>menu</span>
                <img src={Logo} alt=""  className='w-24'/>
                <h1>CHASE YOUR DREAMS INDIA</h1>
            </div>
            <div>
                <h1 className='text-xs'>Hello, Admin</h1>
            </div>
        </div>
    );
};

export default Header;
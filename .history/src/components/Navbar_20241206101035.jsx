import React from 'react'
 import Logo from '../assets/Logo.png'
 

const Navbar = () => {
  return (
    <nav className=' border-[0.5px] border-[#75687e] top-0 left-0 right-0 fixed w-full h-[7.81rem] '> 
<div className=' mx-auto flex justify-between items-center  max-w-[70.7rem] '>

{/* Logo */}
<div className='w-[20.76rem] h-[5.04rem] flex my-[1.385rem] '>
<img src={Logo}  className='object-cover' alt="Logo" />
<h1 className='font-Montserrat font-bold text-[1.75rem] justify-center items-center  my-auto '>Founder's Friday</h1>

</div>

{/* Menu */}
<div className='my-auto  font-medium flex  space-x-[3.8rem] justify-between '>
<div className=' items-end space-x-[1.88rem] text-[1.5rem] my-auto justify-between'> 
  <a href="#home" className='text-[#8300FF]'>Home</a>
    <a href="#about" className=''>About Us </a>
    <a href="#gallery" className=''>Gallery</a>
    <a href="#contact" className=''>Contact Us</a> </div>
    <button className='ml-[3.8rem] text-[#8300FF] border-[#8300FF] text-[1.5rem] font-medium h-[3.7rem] w-[12.28rem]  bg-white rounded-[20px] border-2'> Register </button>
    
</div>
<div></div>

</div>

        
    </nav>
  )
}

export default Navbar

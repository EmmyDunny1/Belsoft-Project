import React from 'react'
 import Logo from '../assets/Logo.png'
 

const Navbar = () => {
  return (
    <nav className='mx-[5.19rem] border-[0.5px] border-[#75687e] top-0 left-0 right-0 fixed w-full h-[7.81rem] '> 
<div className='flex w-full justify-between   mx-[5.19rem]'>

{/* Logo */}
<div className='w-[20.76rem] h-[5.04rem] flex my-[1.385rem] '>
<img src={Logo} alt="Logo" />
<h1 className='font-Montserrat font-bold text-[1.75rem] justify-center items-center  my-auto '>Founder's Friday</h1>

</div>

{/* Menu */}
<div className='my-auto  flex  space-x-[3.8rem] justify-between ml-[12rem]'>
<div className=' items-end space-x-[1.88rem]  justify-between'> <a href="#home" className=''>Home</a>
    <a href="#about" className=''>About Us </a>
    <a href="#gallery" className=''>Gallery</a>
    <a href="#contact" className=''>Contact Us</a> </div>
    <button className='ml-[3.8rem]  text-purple-800 bg-white border rounded-md'> Register </button>
    
</div>
<div></div>

</div>

        
    </nav>
  )
}

export default Navbar

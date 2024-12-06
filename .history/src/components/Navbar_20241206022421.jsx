import React from 'react'
 import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className='border-[0.5px] border-[#75687e] top-0 left-0 fixed w-full h-[7.81rem] '> 
<div className='flex justify-between   mx-[5.19rem]'>

{/* Logo */}
<div className='w-[20.76rem] h-[5.04rem] flex my-[1.385rem] '>
<img src={Logo} alt="Logo" />
<h1 className='font-Montserrat font-bold text-[1.75rem] justify-center items-center  my-auto '>Founder's Friday</h1>

</div>

{/* Menu */}
<div className='my-auto h-[1.81rem] w-[49.6rem] pr-[1.88rem]'>
    <a href="#home" className=''>Home</a>
    <a href="#about" className=''>About Us </a>
    <a href="#gallery" className=''>Gallery</a>
    <a href="#contact" className=''>Contact Us</a>
    <a href="#register" className=''>Register</a>
    
</div>
<div></div>

</div>

        
    </nav>
  )
}

export default Navbar
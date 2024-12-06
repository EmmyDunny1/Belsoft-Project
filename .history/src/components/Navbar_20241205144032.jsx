import React from 'react'
 import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className='border-2 border-[#75687e] top-0 left-0 fixed '> 
 <div className='flex justify-between '>
   {/* Logo */}
   <div className=''>
<img src={Logo} alt="Logo" />
<h1 className=''>Founder's Father</h1>

            </div>

 </div>
      

        
    </nav>
  )
}

export default Navbar

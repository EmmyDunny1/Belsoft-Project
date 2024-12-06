import React from 'react'
 import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className='border-[0.5px] border-[#75687e] top-0 left-0 fixed w-full h-[7.81rem]'> 
<div className='flex justify-between  '>

{/* Logo */}
<div className='w-[20.76rem] h-[5.04rem]'>
<img src={Logo} alt="Logo" />
<h1 className='font-Montserrat h-'>Founder's Father</h1>

</div>
{/* Menu */}
<div>
    <a href="#home" className=''>Home</a>
    
</div>
<div></div>

</div>

        
    </nav>
  )
}

export default Navbar

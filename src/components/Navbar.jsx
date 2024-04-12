import { BiMenuAltRight } from 'react-icons/bi'
import logo from '../assets/logo.svg'
import { useState } from 'react'
function Navbar() {
    const [showMenu, setShowMenu] = useState(true)
    
  return (
    <div className="navbar flex justify-between items-center py-1 px-2 h-[100px] md:px-10 lg:px-32 lg:py-2">
        <a href="#" className='flex justify-center items-center font-bold'>
            <img src={logo} alt="" className='w-10'/>JobY
        </a>
        <div className={showMenu ? 
            'navbar nav flex px-1 py-1 gap-5 absolute top-10 flex-col bg-blue-100 mt-10  left-0 right-0 bottom-0 lg:bg-white lg:mt-0 lg:sticky lg:flex-row'
            :'hidden'}>
            <ul className='navbar__list flex flex-col gap-5 p-2 lg:flex-row'>
                {
                    ["Home","Find Job","Blog","About us"].map((link,index)=><a href="#" key={index} className='py-2'>{link}</a>)
                }
            </ul>
            <div className="navbar__controls p-2">
                <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>Get Started</button>
            </div>
         </div>
        

        <button className='lg:hidden' onClick={() => setShowMenu(!showMenu)}><BiMenuAltRight  size={30} /></button>

    </div>
  )
}

export default Navbar
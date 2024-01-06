import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
  <nav className=' bg-red-500 h-14'>
        <div className='flex mx-auto p-2  h-full'>
            <div className='items-center flex'>
        <NavLink to='/'>
        <h1 className='text-white text-3xl  sm:text-4xl'>LOGO</h1>
        </NavLink>
            </div>
        </div>
  </nav>
  )
}

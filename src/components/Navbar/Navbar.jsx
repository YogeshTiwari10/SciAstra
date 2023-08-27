import React, {useState} from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.webp'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {

  const [toggle, setToggle ] = useState(false)
  
  
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="logo" />
      </div>
      <ul className='navbar-links'>
        {['Home', 'courses', 'selection', 'blogs', 'material', 'teams', 'contact us'].map((items) =>
        <li className='app__center' key={`link-${items}`}>
          <div />
          <NavLink activeClassName="active" to={`/${items}`} > {items} </NavLink>
        </li>
        )}
        <button>Login</button>
      </ul>

      <div className='navbar-menu'>
       <HiMenuAlt4 onClick={()=>setToggle(true)} />
       {toggle &&(
        <motion.div 
        whileInView={{x: [300,0]}}
        transition={{duration: 1, ease:'easeOut'}}
        >
          <HiX onClick={()=>setToggle(false)} />
          <ul>
          {['Home', 'courses', 'selection', 'blogs', 'material', 'teams', 'contact us'].map((items) =>
        <li key={items}>
          <NavLink activeClassName="active2" to={`/${items}`} onClick={()=>setToggle(false)}  > {items} </NavLink>
        </li>
        )}
        <button>Login</button>
        </ul>
        </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar



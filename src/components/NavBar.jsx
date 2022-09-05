import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {



    return (
        <div >
            <ul>

                <li> <NavLink className='active' to="#">  BLOGGG</NavLink>  </li>
                <li>  <NavLink className='active' to="/">  HOME</NavLink>  </li>
                <li>  <NavLink className='active' to="/blogs">  BLOGS</NavLink>  </li>
                <li>  <NavLink className='active' to="/bookmarks">  BOOKMARKS</NavLink>  </li>


            </ul>

        </div>
    )
}

export default NavBar

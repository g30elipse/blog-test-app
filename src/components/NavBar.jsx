import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {



    return (
        <div className='nav'>
            <NavLink to="/">BLOGGG</NavLink>  
            <div>

                  <NavLink  className={({isActive}) => isActive? "active-nav" : ""} to="/">  HOME</NavLink>  
                  <NavLink  className={({isActive}) => isActive? "active-nav" : ""} to="/blogs">  BLOGS</NavLink>  
                 <NavLink  className={({isActive}) => isActive? "active-nav" : ""} to="/bookmarks">  BOOKMARKS</NavLink> 


            </div>

        </div>
    )
}

export default NavBar

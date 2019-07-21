import React from 'react'

function Navbar() {
    return (
        <nav className={'navbar'}>
            <span className={'title'}>Twitter Showcase</span>
           <ul>
               <li><a href="">Home</a></li>
               <li><a href="">Search</a></li>
               <li><a href="">Favorites</a></li>
           </ul>
        </nav>
    )
}

export default Navbar

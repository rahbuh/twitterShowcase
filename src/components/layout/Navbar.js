import React from 'react'

const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <span className={'title'}>Twitter Showcase</span>
           <ul>
               <li><a href="https://google.com">Home</a></li>
               <li><a href="https://google.com">Search</a></li>
               <li><a href="https://google.com">Favorites</a></li>
           </ul>
        </nav>
    )
}

export default Navbar

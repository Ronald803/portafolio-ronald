import React from 'react';

const Navbar = () => {
    return (
        <nav id="navbar-example2" className='navbar bg-body-tertiary px-3 mb-3 fixed-top'>
            <a href='#' className='navbar-brand'>Navbar</a>
            <ul className='nav nav-pills'>
                <li className='nav-item'>
                    <a href='#scrollspy1' className='nav-link'>Item 1</a>
                </li>
                <li className='nav-item'>
                    <a href='#scrollspy2' className='nav-link'>Item 2</a>
                </li>
                <li className='nav-item'>
                    <a href='#scrollspy3' className='nav-link'>Item 3</a>
                </li>
                <li className='nav-item'>
                    <a href='#scrollspy4' className='nav-link'>Item 4</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

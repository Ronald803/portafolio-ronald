import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar navbar-light bg-light px-3'>
            <a href='#!' className='navbar-brand'>Navbar</a>
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
            </ul>
        </nav>
    );
}

export default Navbar;

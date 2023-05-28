import React from 'react';

const Navbar = () => {
    return (
        <div id="navbar-example2" className='row  px-3 fixed-top border border-2 bg-black'>
            <div className='col-sm-3'>
                <a href='#scrollspy1'>
                    <img src='img/logo-removebg.png' className='mt-2 logo'/>
                </a>
            </div>
            <div className='col-sm-9'>
                <ul className='list-unstyled list-inline mt-4' style={{"text-align":"right"}}>
                    {/* <li className='list-inline-item'>
                        <a href='#scrollspy1' className='nav-link text-white font-weight-bold'><h5>Presentation</h5></a>
                    </li> */}
                    <li className='list-inline-item mx-4'>
                        <a href='#scrollspy2' className='nav-link text-white font-weight-bold'><h5>About me</h5></a>
                    </li>
                    <li className='list-inline-item mx-4'>
                        <a href='#scrollspy3' className='nav-link text-white font-weight-bold'><h5>Projects</h5></a>
                    </li>
                    <li className='list-inline-item mx-4'>
                        <a href='#scrollspy4' className='nav-link text-white font-weight-bold'><h5>Contacts</h5></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;


// return (
//     <nav id="navbar-example2" className='navbar bg-body-tertiary px-3 mb-3 fixed-top'>
//         <a href='#' className='navbar-brand'>Navbar</a>
//         <ul className='nav nav-pills'>
//             <li className='nav-item'>
//                 <a href='#scrollspy1' className='nav-link'>Item 1</a>
//             </li>
//             <li className='nav-item'>
//                 <a href='#scrollspy2' className='nav-link'>Item 2</a>
//             </li>
//             <li className='nav-item'>
//                 <a href='#scrollspy3' className='nav-link'>Item 3</a>
//             </li>
//             <li className='nav-item'>
//                 <a href='#scrollspy4' className='nav-link'>Item 4</a>
//             </li>
//         </ul>
//     </nav>
// );
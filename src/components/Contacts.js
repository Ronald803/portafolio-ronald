import React from 'react';
import Form_Contact from './Form_Contact';

const Contacts = () => {
    return (
        <div className='text-white bg-primary bg-opacity-10 pt-5 pb-2'>
            <div className='text-center pb-3'>
                <h2 id="scrollspy4">Contacts</h2>
            </div>
            <div className='text-center'>
                <div className='p-4 border rounded-4' style={{"maxWidth":"500px","margin":"auto"}}>
                    <Form_Contact/>
                </div>
            </div>
            <div className='text-center mt-4'>
                <hr/>
                <h5>ronaldblancobalboa@gmail.com</h5>
                <ul className='list-unstyled list-inline mt-4'>
                    <li className='list-inline-item mx-4'>
                        <a href='https://github.com/Ronald803'>
                            <i class="fab fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className='list-inline-item mx-4'>
                        <a href='https://www.linkedin.com/in/ronald-blanco-balboa-a97978264/'>
                            <i class="fab fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className='list-inline-item mx-4'>
                        <a href='https://www.facebook.com/ronaldvictor.blancobalboa/'>
                            <i className='fab fa-facebook'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contacts;

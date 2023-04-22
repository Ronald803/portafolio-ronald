import React from 'react';

const Contacts = () => {
    return (
        <div>
            <h3 id="scrollspy4">Contacts</h3>
            <p>Cellphone: 72592124</p>
            <p>email: ronaldblancobalboa@gmail.com</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <ul className='list-unstyled list-inline mt-4'>
                <li className='list-inline-item'>
                    <a href='https://github.com/Ronald803'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a href='https://www.linkedin.com/in/ronald-blanco-balboa-a97978264/'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a href='https://www.facebook.com/ronaldvictor.blancobalboa/'>
                        <i className='fab fa-facebook'></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contacts;

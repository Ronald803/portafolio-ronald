import React from 'react';

const Presentation = () => {
    return (
        <div className='my-5 py-4 d-flex align-items-center' >
            <div className='my-4 mx-1 row  py-4' style={{"width":"100%"}}>
                <div className='col-sm-6 text-end d-flex align-items-center px-4'>
                    <div className='' style={{"width":"100%"}}>
                        <img className='img-fluid rounded border border-2 profile-picture' src='img/foto-perfil.jpg' alt='ronald photo'/>
                    </div>
                </div>                                
                <div className='col-sm-6 d-flex align-items-center px-4'>
                    <div className='d-flex align-items-center py-4'>
                        <div className='border-2  py-4'>
                            <h3 className='text-white' id="scrollspy1">Hi</h3>
                            <h3 className='text-white' id="scrollspy1">mi name is</h3>
                            <h1 className='text-white  font-weight-bold' id="scrollspy1">Ronald Victor</h1>
                            <h1 className='text-white  font-weight-bold' id="scrollspy1">Blanco Balboa</h1>
                            <hr className='text-white border'/>
                            <h3 className='text-white'>Full Stack Developer</h3>
                            <h3 className='text-white'>Electronic Engineer</h3>                
                            <hr className='text-white border'/>
                            <ul className='list-unstyled list-inline mt-4'>
                                <li className='list-inline-item px-2'>
                                    <a href='https://github.com/Ronald803' className=''>
                                        <i class="fab fa-brands fa-github" ></i>
                                    </a>
                                </li>
                                <li className='list-inline-item px-2'>
                                    <a href='https://www.linkedin.com/in/ronald-blanco-balboa-a97978264/'>
                                        <i class="fab fa-brands fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className='list-inline-item px-2'>
                                    <a href='https://www.facebook.com/ronaldvictor.blancobalboa/'>
                                        <i className='fab fa-facebook'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;

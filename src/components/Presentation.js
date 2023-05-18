import React from 'react';

const Presentation = () => {
    return (
        <div className='mt-5 py-4 d-flex align-items-center' style={{"height":"90vh"}}>
            <div className='mx-4 row rounded-4 border border-2 border-white py-4 bg-black bg-opacity-50' style={{"width":"100%","height":"80%"}}>
                <div className='col-sm-5 text-end d-flex align-items-center'>
                    <div className='' style={{"width":"100%"}}>
                        <img className='img-fluid rounded border border-2 profile-picture' src='../img/foto-perfil.jpg' alt='ronald photo'/>
                    </div>
                </div>                                
                <div className='col-sm-7 d-flex align-items-center border-2 border-start'>
                    <div className='d-flex align-items-center border-2 border-top border-bottom py-4'>
                        <div className='border-2 border-top border-bottom py-4'>
                            <h4 className='text-white' id="scrollspy1">Hi</h4>
                            <h4 className='text-white' id="scrollspy1">mi name is</h4>
                            <h3 className='text-white' id="scrollspy1">Ronald Victor Blanco Balboa</h3>
                            <h5 className='text-white'>Full Stack Developer</h5>
                            <h5 className='text-white'>Electronic Engineer</h5>                
                        </div>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;

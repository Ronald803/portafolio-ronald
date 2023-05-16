import React from 'react';

const Presentation = () => {
    return (
        <div className='mt-5 py-4 d-flex align-items-center' style={{"height":"90vh"}}>
            <div className='mx-4 row rounded-4 border border-2 border-white py-4 bg-black bg-opacity-50' style={{"width":"100%","height":"80%"}}>
                <div className='col-sm-6 text-end d-flex align-items-center'>
                    <div className='' style={{"width":"100%"}}>
                        <img className='img-fluid rounded border border-2 profile-picture' src='../img/foto-perfil.jpg' alt='ronald photo'/>
                    </div>
                </div>                                
                <div className='col-sm-6 d-flex align-items-center border-2 border-start'>
                    <div className='d-flex align-items-center border-2 border-top border-bottom py-4'>
                        <div className='border-2 border-top border-bottom py-4'>
                            <h4 className='text-white' id="scrollspy1">Hola</h4>
                            <h4 className='text-white' id="scrollspy1">mi nombre es</h4>
                            <h3 className='text-white' id="scrollspy1">Ronald Victor Blanco Balboa</h3>
                            <h5 className='text-white'>Desarrollador Web Full Stack</h5>
                            <h5 className='text-white'>Ingeniero Electrónico</h5>                
                        </div>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;

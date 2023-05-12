import React from 'react';

const Presentation = () => {
    return (
        <div className='row mt-5 py-4 d-flex align-items-center' >
            <div className='col-sm-6'>
                <h3 className='text-white' id="scrollspy1">Hola</h3>
                <h3 className='text-white' id="scrollspy1">mi nombre es</h3>
                <h2 className='text-white' id="scrollspy1">Ronald Victor Blanco Balboa</h2>
                <h4 className='text-white'>Desarrollador Web Full Stack</h4>
                <h4 className='text-white'>Ingeniero Electrónico</h4>                
            </div>
            <div className='col-sm-6'>
                <img className='img-fluid rounded border' src='../img/foto-perfil.jpg' alt='ronald photo'/>
            </div>                                
        </div>
    );
}

export default Presentation;

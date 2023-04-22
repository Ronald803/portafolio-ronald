import React from 'react';

const Presentation = () => {
    return (
        <div className='row mt-5 d-flex align-items-center' style={{"height":"500px"}}>
            <div className='col-sm-8'>
                <h2 className='text-white' id="scrollspy1">Hola mi nombre es Ronald</h2>
                <h4 className='text-white'>Desarrollador Web Full Stack</h4>
                <h4 className='text-white'>Ingeniero Electrónico</h4>                
            </div>
            <div className='col-sm-4'>
                <img className='img-fluid rounded' src='../img/foto-perfil.jpg' alt='ronald photo'/>
            </div>                                
        </div>
    );
}

export default Presentation;

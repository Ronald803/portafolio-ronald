import React from 'react';

const Presentation = () => {
    return (
        <div className='card mb-3' style={{'max-width':'740px'}}>
            <div className='row g-0'>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h2 className='card-title'>Hello, welcome everybody</h2>
                        <h1>My name is Ronald</h1>
                        <h4>I am a full stack web developer, an electronic engineer</h4>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img className='img-fluid rounded-start' src='../img/foto-perfil.jpg' alt='ronald photo'/>
                </div>                                
            </div>
        </div>
    );
}

export default Presentation;

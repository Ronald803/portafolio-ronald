import React from 'react';

const AboutMe = () => {
    return (
        <div className='text-white d-flex align-items-center' style={{"height":"60vw"}}>
            <div>
                <h3 id="scrollspy2">About me</h3>
                <h3>About Me</h3>
                <p>I am Ronald Victor Blanco Balboa, and I am a full stack web developer</p>
                <p>Estas son algunas de las tecnologías con las que he trabajado:</p>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Redux</li>
                    <li>MERN</li>
                    <li>MongoDb</li>
                </ul>
                <div className='' style={{"maxWidth":"700px"}}>
                    <div className='row'>
                        <div className='col-sm-2 container'><img className='img-fluid' src='../img/logos/html.png'/></div>
                        <div className='col-sm-2 container'><img className='img-fluid' src='../img/logos/css.png'/></div>
                        <div className='col-sm-2'><img className='img-fluid' src='../img/logos/javascript.png'/></div>
                        <div className='col-sm-2'><img className='img-fluid' src='../img/logos/github.png'/></div>
                        <div className='col-sm-2'><img className='img-fluid' src='../img/logos/mysql.png'/></div>
                        <div className='col-sm-2 container'><img className='img-fluid' src='../img/logos/nodejs.png'/></div>
                        <div className='col-sm-2'><img className='img-fluid' src='../img/logos/react.png'/></div>
                        <div className='col-sm-2'><img className='img-fluid' src='../img/logos/mongodb-logo.png'/></div>
                        <div className='col-sm-2'><img className='img-fluid' src='../img/logos/mern.png'/></div>
                    </div>
                </div>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            </div>
        </div>
    );
}

export default AboutMe;

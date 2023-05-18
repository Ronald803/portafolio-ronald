import React from 'react';

const AboutMe = () => {
    return (
        <div className='text-white d-flex align-items-center' style={{"height":"60vw"}}>
            <div>
                <h3 id="scrollspy2">About me</h3>
                <h3>About Me</h3>
                <p>I am Ronald Victor Blanco Balboa, and I am a full stack web developer</p>
                <p>Estas son algunas de las tecnologías con las que he trabajado:</p>
                <div className='' >
                    <div className='row pe-4 mx-4 text-center'>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/html-logo.svg'/>
                            <p>Html 5</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/css-logo.svg'/>
                            <p>CSS 3</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/javascript-logo.svg'/>
                            <p>JavaScript</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/skills-git.svg'/>
                            <p>GIT</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/node-logo.svg'/>
                            <p>Node JS</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/react.png'/>
                            <p>React</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/postgresql-logo.svg'/>
                            <p>PostgreSQL</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/skills-mongodb.svg'/>
                            <p>MongoDB</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-6 col-md-4 '>
                            <img className='img-fluid' src='../img/logos/mern.png'/>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/material-ui.svg'/>
                            <p>Material UI</p>
                        </div>
                        <div className='logo-tech rounded-4 pt-4 px-4 col-3 col-md-2 '>
                            <img className='img-fluid' src='../img/logos/boot.png'/>
                            <p>Bootstra</p>
                        </div>
                    </div>
                </div>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            </div>
        </div>
    );
}

export default AboutMe;

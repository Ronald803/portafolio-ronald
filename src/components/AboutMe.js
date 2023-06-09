import React from 'react';

const AboutMe = () => {
    return (
        <div id="scrollspy2" className='bg-primary bg-opacity-10 ps-4 text-white d-flex align-items-center' style={{"height":"50vw"}}>
            <div className='text-center'>
                <div className='row py-4 me-2'>
                    <div className='my-4 col-12'>
                        <h1>About Me</h1>
                    </div>
                    <div className='col-4 py-4 container '>
                        <h5 className=''>I have worked on a variety of web projects, both personal and for clients as a freelancer. I am passionate about continuous learning and actively seek out new challenges in the web development industry. My goal is to stay up-to-date with the latest technologies and trends to deliver innovative and efficient web solutions.</h5>
                    </div>
                    <div className='col-8 py-4 '>
                        <h5>Strong knowledge of:</h5>
                        <div className='' >
                            <div className='row pe-2 text-center'>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/html-logo.svg'/>
                                    <p>Html5</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/css-logo.svg'/>
                                    <p>CSS 3</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/javascript-logo.svg'/>
                                    <p>JavaScript</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/skills-git.svg'/>
                                    <p>GIT</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/node-logo.svg'/>
                                    <p>NodeJS</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/react.png'/>
                                    <p>React</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 text-center'>
                                    <img className='img-fluid' src='img/logos/postgresql-logo.svg'/>
                                    <p >PostgreSQL</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/skills-mongodb.svg'/>
                                    <p>MongoDB</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-6 col-md-4 '>
                                    <img className='img-fluid' src='img/logos/mern.png'/>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/material-ui.svg'/>
                                    <p>Material UI</p>
                                </div>
                                <div className='logo-tech rounded-4 pt-4 px-3 col-3 col-md-2 '>
                                    <img className='img-fluid' src='img/logos/boot.png'/>
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

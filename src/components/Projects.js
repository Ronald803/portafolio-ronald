import React from 'react';
import ProjectElement from './ProjectElement'

const Projects = () => {
    return (
        <div id="scrollspy3" className=' scroll-horizontal text-black d-flex align-items-center mb-4' >
            <div className='text-center pt-4 my-4' style={{"width":"100%"}}>
                <div className='text-center text-white'>
                    <h1>Projects</h1>
                </div>
                <div className=''>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <ProjectElement project_info={proyectos[0]}></ProjectElement>
                          </div>
                          <div className="carousel-item">
                            <ProjectElement project_info={proyectos[1]}></ProjectElement>
                          </div>
                          <div className="carousel-item">
                            <ProjectElement project_info={proyectos[2]}></ProjectElement>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
const proyectos = [
  {
    title: 'Sistema de Reservas Gran Poder',
    description: 'Aplicacion desarrollada para la empresa Eventos Sociales Gran Poder, consta de un sistema de reserva de los servicios que ofrece la empresa Gran Poder',
    technologies: ['React','Node','MongoDB','Bootstrap'],
    link: 'https://eventos-gran-poder.vercel.app/',
    repositories: [
      {
        name: 'Repo Backend',
        link: 'https://github.com/Ronald803/restserver-proyecto',
      },
      {
        name: 'Repo Frontend',
        link: 'https://github.com/Ronald803/prueba_REACT_frontend'
      }
    ],
    screenshot: "granpoder.png"
  },
  {
    title: 'Learn English',
    description: 'Aplicacion desarrollada para la institucion educativa CEA Don Bosco (Centro de Educacion Alternativa).',
    technologies: ['React','Node','MongoDB','Bootstrap'],
    link: 'https://learn-with-cea.vercel.app/',
    repositories: [
      {
        name: 'Repo Backend',
        link: 'https://github.com/Ronald803/learn-english-backend',
      },
      {
        name: 'Repo Frontend',
        link: 'https://github.com/Ronald803/learn-english'
      }
    ],
    screenshot: "learn-english.png"
  },
  {
    title: 'Playlist',
    description: 'Playlist desarrollada en React consumiendo la api de SoundCloud.',
    technologies: ['React','Node','MongoDB','Bootstrap'],
    link: 'https://ronald803.github.io/practice-soundcloud-api/',
    repositories: [
      {
        name: 'Repo Frontend',
        link: 'https://github.com/Ronald803/practice-soundcloud-api'
      }
    ],
    screenshot: "playlist.png"
  }
]
export default Projects;

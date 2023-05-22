import React from 'react'
const objeto = {
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
    screenshot: "../img/projects/granpoder.png"
  }
function ProjectElement() {
  return (
    <div className='row border border-danger py-4'>
        <div className='col-12 my-2 pt-3 pb-2 border'>
            <h3>{objeto.title}</h3>
        </div>
        <div className='col-6 border py-4'>
            <img src={objeto.screenshot} class="d-block w-100" alt="Proyecto Eventos Sociales Gran Poder"/>
        </div>
        <div className='col-6 border py-4'>
          <div>
            <p>{objeto.description}</p>
          </div>
          <div className='row my-2'>
            {objeto.technologies.map(tech=>(
              <div className='col border p-1'>
                {tech}
              </div>
            ))}
          </div>
          <div className='my-4'>
            <a className='px-4 btn btn-warning' href={objeto.link}>App</a>
          </div>
          <div className='my-1 row'>
            {objeto.repositories.map(rep=>(
              <div className='col-3'>
                <a className='btn btn-secondary' href={rep.link}>{rep.name}</a>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ProjectElement
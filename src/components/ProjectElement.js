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
    screenshot: "granpoder.png"
  }
function ProjectElement(props) {
  const obj = props.project_info
  console.log({obj});
  return (
    <div className='row  py-2'>
        <div className='col-12 my-2 pt-3 pb-2 border-top border-info'>
            <h3>{obj.title}</h3>
        </div>
        <div className='col-6 border border-info py-4'>
            <img src={`../img/projects/${obj.screenshot}`} class="d-block w-100" alt="Proyecto Eventos Sociales Gran Poder"/>
        </div>
        <div className='col-6 border border-info py-4'>
          <div>
            <p>{obj.description}</p>
          </div>
          <div className='row my-2'>
            {obj.technologies.map(tech=>(
              <div className='col border border-info p-1'>
                {tech}
              </div>
            ))}
          </div>
          <div className='my-4'>
            <a className='px-4 btn btn-warning' href={obj.link}>App</a>
          </div>
          <div className='my-1 row'>
            {obj.repositories.map(rep=>(
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
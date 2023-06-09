import React from 'react'
function ProjectElement(props) {
  const obj = props.project_info
  console.log({obj});
  return (
    <div className='row text-white'>
        <div className='col-12  pt-4 pb-3 '>
            <h2>{obj.title}</h2>
        </div>
        <div className='col-6  py-4'>
            <div className='ps-3 ms-3'>
              <img src={`img/projects/${obj.screenshot}`} class="d-block w-100" alt="Proyecto Eventos Sociales Gran Poder"/>
            </div>
        </div>
        <div className='col-6  py-4'>
          <div className='ps-2 pe-4 me-4'>
            <div>
              <p>{obj.description}</p>
            </div>
            <div className='row my-2 bg-black text-white'>
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
                  <a className='btn btn-dark' href={rep.link}>{rep.name}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectElement
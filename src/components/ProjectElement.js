import React from 'react'

function ProjectElement() {
  return (
    <div className='row border border-danger py-4'>
        <div className='col-12 my-2 pt-3 pb-2 border'>
            <h3>Sistema de Reservas Gran Poder</h3>
        </div>
        <div className='col-6 border py-4'>
            <img src="../img/projects/granpoder.png" class="d-block w-100" alt="Proyecto Eventos Sociales Gran Poder"/>
        </div>
        <div className='col-6 border py-4'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
  )
}

export default ProjectElement
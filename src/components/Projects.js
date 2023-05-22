import React from 'react';
import ProjectElement from './ProjectElement'

const Projects = () => {
    return (
        <div id="scrollspy3" className='scroll-horizontal text-white d-flex align-items-center border me-4' >
            <div className='text-center' style={{"width":"100%"}}>
                <div className='text-center'>
                    <h2>Projects</h2>
                </div>
                <div className=''>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ProjectElement></ProjectElement>
                          </div>
                          <div class="carousel-item">
                            <ProjectElement></ProjectElement>
                          </div>
                          <div class="carousel-item">
                            <ProjectElement></ProjectElement>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;

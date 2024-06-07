import React from 'react'
import './Project.css';
import Project from './Project';
import ProjectCardDetail from './ProjectCardDetail'
const ProjectCard = () => {
  return (
     <>
        <div className='work-container' id='ProjectCard'>
        <h1 className='project-heading text-primary'>Projects</h1>
        <div className='project-container'>
           {ProjectCardDetail.map((val,ind)=>{
            return(
                <Project 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title} 
                text={val.text}
                view={val.view}
                />
            )
           })}
        </div>
      </div>
     </>
  )
}

export default ProjectCard;
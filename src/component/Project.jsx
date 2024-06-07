import React from 'react';
import { NavLink } from 'react-bootstrap';
import './Project.css';
 
const Project = (props) => {
  return (
    <>
       <div className='project-card'>
            <img src={props.imgsrc} alt='' />
            <h2 className='project-title text-primary'> {props.title}</h2>
            <div className='pro-details'>
              <p className='text-primary'>{props.text}</p>
              <div className='pro-btns'>
                <NavLink to={props.view} className='btn text-bg-light' >View</NavLink>
                <NavLink to="url.com" className='btn text-bg-info'>Source</NavLink>
              </div>
            </div>
          </div>
    </>
  )
}

export default Project;
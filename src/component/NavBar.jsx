import React, { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import './NavBar.css'


function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""} id="Navbar">
        <Container>
          <Navbar.Brand href="#home"><img src="./img/logo.png" alt="logo" height={110} /></Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Banner" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="https://app.luminpdf.com/viewer/66618d5181e541d7b41176ae" target="vaishnavi" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
              <Nav.Link href="#Project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#Contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/vaishnavi-sisodiya-09558721b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_vaishnavi"><LinkedInIcon className="icon" style={{height:"35px", width:"35px"}}/></a>
                <a href="https://github.com/vaishnavisisodiya" target="vaishnavi_github"><GitHubIcon className="icon" style={{height:"35px", width:"35px"}} /></a>
                <a href="https://web.telegram.org/k/" target="vaishnavi_telegram"><TelegramIcon  className="icon" style={{height:"35px", width:"35px"}}/></a>

              </div>
              <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
            {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
       
       
    </>
  );
}

export default NavBar;

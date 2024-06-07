import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
     <>
<footer class="text-center text-lg-start bg-body-tertiary text-muted">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{backgroundColor:"dark-gray"}} >
  
    <div class="me-5 d-none d-lg-block" style={{color:"dark-gray"}}>
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="https://www.google.com/" class="me-4 text-reset" target='_hello'>
         <LinkedInIcon />
      </a>
      <a href="https://www.google.com/" class="me-4 text-reset" target='_hello'>
        <GitHubIcon/>
      </a>
      <a href="https://www.google.com/" class="me-4 text-reset" target='_hello'>
        <TelegramIcon/>
      </a>
    </div>
  
  </section>

  <section class="" >
    <div class="container-fluid text-center text-md-start">
   
      <div class="row mt-3">
     
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>About me
          </h6>
          <p>
          I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience.
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Links
          </h6>
          <p>
            <a href="#!" class="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" class="text-reset">About</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Resume</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Project</a>
          </p>
        </div>
  
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i>96, Amrakunj colony <br/>Airport road indore (M.P.)</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            vaishvi.sisodiya28@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 8319745828</p>
        </div>
     
      </div>
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: "gray"}}>
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">vaishnaviSisodiya</a>
  </div>

</footer>

     </>
  )
}

export default Footer;
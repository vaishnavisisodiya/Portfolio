import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='containerC' id="Contact">
        <div className='itemI'>
          <div className='contact'>
            <div className='first-text'>Let's get in touch</div>
            <img className='images' src='./img/contact.jpg' alt='' />

            <div className='social-links'>
              <LinkedInIcon className="icon1" style={{ height: "35px", width: "35px" }} />
              <GitHubIcon className="icon1" style={{ height: "35px", width: "35px" }} />
              <TelegramIcon className="icon1" style={{ height: "35px", width: "35px" }} />
            </div>
          </div>
          <div className='submit-form'>
            <h4 className='third-text text'>Contact Us</h4>
            <form action=''>
              <div className='input-box'>
                <input type='text' className='input' required />
                <label for="">Name</label>
              </div>
              <div className='input-box'>
                <input type='email' className='input' required/>
                <label for="">Email</label>
              </div>
              <div className='input-box'>
                <input type='tel' className='input' required />
                <label for="">Phone</label>
              </div>
              <div className='input-box'>
                <textarea name='' className='input' required id='message' cols='30' rows='10' />
                <label for="">Message</label>
              </div>
              <input type='submit' className='btns' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
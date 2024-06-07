import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css'
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return <>
    <section className='skill' id="Skills">
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>
                Skills
              </h2>
              {/* <p>I have a degree in computer Application and I have been learning programming and coding languages for a few months.I know a lot of programming languages like Java, C++, and Python.I have learned on some languages in C C++ HTML CSS JavaScript Bootstrap and React Js.I have worked on some mini projects like TIC TAC TOE,Accordian,Contact page,PasswordGenerator and Animal cards.</p> */}
              <p>I have done bachelor of computer Application from Shri Vaishnav Institute of Management Indore MP. During my BCA program I gained a strong foundation in various computer science concepts and developed a proficiency in programming language like C, CPP, Java.I decided to pursue MCA degree to further enhance my knowledge & skills in the field of computer science.I am pursuing MCA from National Institute of Technology Jamshedpur, Jharkhand.</p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className='item'>
                  <img src="./img/cpp_logo.png" alt='image' style={{width:"34%"}}/>
                  <h5>CPP</h5>
                </div>

                <div className='item'>
                  <img src="./img/js_logo.png" alt='image' />
                  <h5>JavaScript</h5>
                </div>

                <div className='item'>
                  <img src="./img/react_logo.png" alt='image' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src="./img/bootstrap.png" alt='image' />
                  <h5>Bootstrap</h5>
                </div>
                <div className='item'>
                  <img src="./img/css_logo.png" alt='image' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src="./img/html_logo.png" alt='image' />
                  <h5>HTML</h5>
                </div>
              </Carousel>

            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className='background-image-left' src='./img/background4.jpg' /> */}
    </section>
    
  </>
}
export default Skills;
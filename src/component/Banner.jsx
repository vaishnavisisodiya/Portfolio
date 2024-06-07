import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
 
import './Banner.css'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Frontend Developer", "React js Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <>
            <section className="banner" id="Banner">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>

                            <span className="tagline">welcome to my portfolio</span>
                            <h1>{`Hi I'm Vaishnavi Sisodiya `}<br /><span className="wrap">{text}</span></h1>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                        
                        <img src="./img/img.jpg" alt="header img" height={400} width={400} style={{borderRadius:"50%"}} />
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}
export default Banner;


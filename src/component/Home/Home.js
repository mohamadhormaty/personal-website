import React from 'react';
import {Row , Col , Container } from 'react-bootstrap';

//import icone 
import {FaWhatsappSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa';

//import css
import './Home.scss';
import 'animate.css';


function Home() {


    return (
        <div className="home">
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} className="mb-5">
                        <div className="home-pic animate__animated animate__fadeInRight">
                            <img  src="./svg/home-pic.svg" alt="Home-pic"/>
                         </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="home-content">
                            <div className="home-about animate__animated animate__fadeInLeft">
                                <h2>Who I am ?</h2>
                                <p>Hello, I am <b>Mohamad Hormati</b><br/>
                                Born on 13/06/1996 in Iran - Tehran<br/>
                                Bachelor of Medical Engineering <br/> Web Designer and Developer</p>
                                <span>Tell : +989203013260</span>                               
                            </div>
                            <div className="social animate__animated animate__fadeIn animate__delay-1s">
                            <FaWhatsappSquare className="social-item" />
                            <FaInstagramSquare className="social-item" />
                            <FaLinkedin className="social-item" />
                            <FaTelegram className="social-item" />
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home



import React from 'react';
import {Row , Col , Container } from 'react-bootstrap';
//import css
import './Contact.scss';
//import icone
import {FaWhatsappSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa';

function Contact() {
    return (
        <div className="contact">
            <Container fluid>
                <Row>
                    <Col className="contact-pic animate__animated animate__fadeInRight" sm={12} md={6}>
                        <img src="./svg/contact-pic.svg" alt="contact-pic" />
                    </Col>
                    <Col className="contact-content animate__animated animate__fadeInLeft" sm={12} md={6}>
                        <div className="contact-social">
                            <div className="contact-item">
                                <FaWhatsappSquare className="social-item" />
                                <h6>whats app</h6>
                            </div>
                            <div className="contact-item">
                                <FaInstagramSquare className="social-item" />
                                <h6>instagram</h6>
                            </div>
                            <div className="contact-item">
                                <FaLinkedin className="social-item" />
                                <h6>linkedin</h6>
                            </div>
                            <div className="contact-item">
                                <FaTelegram className="social-item" />
                                <h6>telegram</h6>
                            </div>
                        </div>
                        <p>TELL : +989203013260</p>
                        <p>EMAIL : mamaly_hormaty@yahoo.com</p>
                        <p>ADDRESS : shahid beheshti town - nastaran 23</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact

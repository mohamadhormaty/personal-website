import React from 'react';
import {Row , Col , Container } from 'react-bootstrap';

//import css
import './About.scss';
import 'animate.css';

function About() {
    return (
        <div className="about">
            <Container fluid>
                <Row>
                    <Col className="about-pic animate__animated animate__fadeInRight" sm={12} md={6}>
                        <img src="./svg/about-pic.svg" alt="about-pic"/>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="about-description animate__animated animate__fadeInLeft">
                            <h2>About Me :</h2>
                            <p>My name is Mohammad Hormati.<br/>
                            Date of birth: 13/06/1996.<br/>
                            Bachelor of Medical Engineering from Islamic Azad University of South Tehran.<br/>
                            Interested in web programming and design,<br/>
                            I started learning seriously in 2019 and I learned very quickly<br/>
                            Currently the topics I have learned are :<br/>
                            <b>1-HTML
                            2-CSS
                            3-JavaScript
                            4-JQuery<br/>
                            5-BootStrap
                            6-SASS
                            7-React
                            8-Redux<br/>
                            9-WebPack
                            10-TypeScript
                            11-Git and GitHub
                            12-React Native<br/></b>
                            I am also very interested in learning Beck end topics and I am making progress in this area.<br/>
                            Address : Tehran - Babaei Highway - Shahid Beheshti Town .</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About

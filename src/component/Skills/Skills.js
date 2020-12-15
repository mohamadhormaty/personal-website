import React from 'react';
import { ProgressBar , Row , Col , Container } from 'react-bootstrap';
//import css
import './Skills.scss';

function Skills() {
    return (
        <div className="skills">
            <Container fluid>
                <Row>
                    <Col className="skills-pic animate__animated animate__fadeInRight" sm={12} md={6}>
                        <img src="./svg/skills-pic.svg" alt="skills-pic"/>
                    </Col>
                    <Col sm={12} md={6}>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>HTML</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={100} label="100%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>CSS</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={100} label="100%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>Java Script</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={80} label="80%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>Bootstrap</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={100} label="100%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>JQuery</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={100} label="70%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>SASS</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={70} label="70%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>React</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={80} label="80%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>Redux</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={100} label="100%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>Type Script</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={70} label="70%" />
                            </Col>
                        </Row>
                        <Row className="skills-row">
                            <Col className="skills-name animate__animated animate__fadeInLeft" sm={12} md={6}>
                                <h3>Web Pack</h3>
                            </Col>
                            <Col className="progres animate__animated animate__fadeInRight" sm={12} md={6}>
                                <ProgressBar className="progres-bar" variant="success" now={70} label="70%"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills

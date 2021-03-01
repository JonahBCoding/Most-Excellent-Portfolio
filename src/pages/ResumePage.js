import React from 'react';
import Hero from "../components/Hero";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DownloadLink from 'react-download-link';

function ResumePage(props) {

    return(
        
        <Container>
            <Hero title= {props.title} />
            <Row>
                <Col>
                    <h1>
                        <DownloadLink label="Download Resume" className="text-decoration-none text-white" />
                    </h1>
                </Col>
                <Col className="text-white">
                    <h1>Proficiencies</h1>
                    <p>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}



export default ResumePage;
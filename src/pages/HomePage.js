import React from "react";
import Hero from "../components/Hero";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import dumbledore from "../assets/images/dumbledore.jpg";


function HomePage(props) {
  return (
    <div className="">
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Row className="justify-content-center">
          <Col xs={6} md={3}>
            <Image src={dumbledore} fluid thumbnail />
          </Col>
          <Col xs={6}>
            <h1 className="text-white">About Me</h1>
            <p className="text-white">
              I am a developer with 6 months of experience in full-stack development.I am also experienced in many other programs 
              and tools used in the web development space such as Photoshop, After Effects, and Dreamweaver
            </p>
            
          </Col>
        </Row>
    </div>
  );
}

export default HomePage;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jonah Benson",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Contact", path: "/contact" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Resume", path: "/resume" },
      ],
      home: {
        title: "Jonah Benson",
        subTitle: "Full-Stack Web Developer",
      },
      contact: {
        title: "Let's Talk",
      },
      portfolio: {
        title: "Check out my past projects!",
      },
      resume: {
        title: "Resume",
      },
    };
  }

  render() {
    return (
      
        <Router>
        <Container className="p-0" fluid>
          <Navbar className="" bg="info" expand="lg">
            <Navbar.Brand className="text-white">Jonah Benson</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>

                <Link className="nav-link text-white" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="nav-link text-white" to="/resume">
                  Resume
                </Link>
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route
            path="/portfolio"
            exact
            render={() => <PortfolioPage title={this.state.portfolio.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          <Route
            path="/resume"
            exact
            render={() => <ResumePage title={this.state.resume.title} />}
          />

          <Footer />
        </Container>
      </Router>
      
      
    );
  }
}

export default App;

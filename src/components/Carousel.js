import React from 'react';

import Card from '../components/Card';

import runbuddy from '../assets/images/runbuddy.png';
import dogtinder from '../assets/images/dogtinder.png';
import weatherboard from '../assets/images/weatherboard.png';
import schedule from '../assets/images/schedule.png';
import mars from '../assets/images/mars.png'
import password from '../assets/images/password.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Run Buddy',
                    subTitle: 'A fitness scheduling application',
                    imgSrc: runbuddy,
                    link: 'https://github.com/JonahBCoding/run-buddy',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Weather Dashboard',
                    subTitle: 'A weather application',
                    imgSrc: weatherboard,
                    link: 'https://jonahbcoding.github.io/Weather-Dashboard/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Plenty O\' Pups',
                    subTitle: 'A Doggie Playdate Finder',
                    imgSrc: dogtinder,
                    link: 'https://github.com/JonahBCoding/Weather-Dashboard',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Daily Scheduler',
                    subTitle: 'A Scheduling App',
                    imgSrc: schedule,
                    link: 'https://jonahbcoding.github.io/DailyScheduler/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Mars Weather',
                    subTitle: 'A Mars weather application',
                    imgSrc: mars,
                    link: 'https://mbogaert.github.io/mars-versus-earth-weather/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Password Generator',
                    subTitle: 'A password generating application',
                    imgSrc: password,
                    link: 'https://jonahbcoding.github.io/Password-Generator/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid>
                <Row className="justify-content-center" fluid>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;

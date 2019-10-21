import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import background from '../../assests/background.jpg';

const Styles = styled.div`
 .jumbo{
     background: url(${background}) no-repeat fixed bottom;
    //  background-color: aquamarine;
    color:white;
 }
`;

const Home = () => {
    return(
        <Styles>
            <Container>
                <Jumbotron className="jumbo">
                    Hello
                </Jumbotron>
            </Container>
        </Styles>
    )
}

export default Home;
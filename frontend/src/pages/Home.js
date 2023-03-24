import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Container>
      <h3>Wellcome to Home Page</h3>
      <Link to="/home">Home</Link>
    </Container>
  )
}

export default Home;
const Container = styled.div`
width: 150vh;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('images/model-y.jpg');
display:flex;
flex-direction: column;
justify-content:space-between;
align-items: center;
padding-block-end: 5cm;
`
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const   About = () => {
  return (
    <Container>
      <h5>Wellcome to About Page</h5>
    
      <Link to="/">About</Link>
    </Container>
  )
}

export default About;
const Container = styled.div`
  width: 150vh;
height: 45vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('images/model-y.jpg');
display:flex;
flex-direction: column;
justify-content:space-between;
align-items: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`

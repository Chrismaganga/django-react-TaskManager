import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <Container>
      <h3>Wellcome to About Page</h3>
      <Link to="signup/">SignUp</Link>
    </Container>
  )
}

export default SignUp;
const Container = styled.div`
width: 100pc;
height: max-content;
border-image-repeat: round;

`
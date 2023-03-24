import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <Container>
      <h3>Wellcome to Blog Page</h3>
      <Link to="blog/">Blog</Link>
    </Container>
  )
}

export default Blog;
const Container = styled.div`
width: 100vh;
height: 70vh;
border-image-repeat: round;

`

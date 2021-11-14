import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalFonts from '../Styled/fonts/fonts';

const Wallpaper = styled.div`
  display: inline-block;
  width: 89vw;
  height: 76vh;
  background-image: url(${process.env.PUBLIC_URL}/img/background.jpg);
  background-size: cover;
  padding-left: 11vw;
  padding-top : 24vh;
`
const Title = styled.div`
  width: 23vw;
  height: 25vh;
  font-family: 'Gmarket-bold';
  font-size: 12vh;
`
const GoToBeerlistBtn = styled(Link)`
  display: inline-block;
  width: 23vw;
  height: 11vh;
  margin-top: 13vh;
  background-color: black;
  font-family: 'Gmarket-medium';
  font-size: 4vh;
  font: white;
  color: white;
  text-align: center;
  line-height: 12vh;
  text-decoration: none;
  :visited {
    color: white;
  }
`

const Home = () => {
  return (
    <Wallpaper>
      <GlobalFonts />
      <Title>Beers<br/>Cheers</Title>
      <GoToBeerlistBtn to="/beerlist">Go to Beer List</GoToBeerlistBtn>
    </Wallpaper>
  )
}

export default Home

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
  width: 100vw;
  height: 13vh;
  margin: 3.5vh 0 2vh 0;
`
const Title = styled.div`
  font-family: 'Gmarket-bold';
  font-size: 5vh;
  text-align: center;
`
const Sub = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr 12px 20px 1fr; 
  width: 160px;
  margin: 3vh auto 0 auto;
`
export const Logo = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${process.env.PUBLIC_URL}/img/${props => props.icon}.png);
  background-size: cover;
`
const Span = styled(Link)`
  display: block;
  height: 24px;
  font-family: 'Gmarket-medium';
  color: black;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  :visited {
    color: black;
  }
`

const Header = (props) => {
  return (
    <HeaderDiv>
      <Title>{props.title}</Title>
      <div>
        <Sub>
          <Logo icon="beer_icon"></Logo>
          <Span to="/home">home</Span>
          <span></span>
          <Logo icon={`${props.menu}_icon`}></Logo>
          <Span to={props.menu === "list" ? "beerlist" : `/${props.menu}`}>{props.menu}</Span>
        </Sub>
      </div>
    </HeaderDiv>
  )
}

export default Header;
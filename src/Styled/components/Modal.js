import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setModalToggle } from '../../Modules/reducers/beerlist';

const ModalContainer = styled.div`
  display: ${props => props.toggle ? "block" : "none"};
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: 9998;
`
const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 30vw;
  height: auto;
  min-width: 400px;
  padding: 0 1.5vw 3vh 1.5vw;
  background-color: white;
  border-radius: 4px;
  z-index: 9999;
`
const Image = styled.div`
  width: 30%;
  height: 25vh;
  margin: 3.5vh auto;
  background-image: url(${props => props.image_url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const Name = styled.div`
  margin: 3vh auto;
  font-family: 'Gmarket-medium';
  font-size: 3vh;
  text-align: center;
`
const Tagline = styled.div`
  margin: 3vh auto;
  font-family: 'Gmarket-light';
  font-size: 2.5vh;
  text-align: center;
`
const Description = styled.div`
  margin: 3vh auto;
  font-family: 'Gmarket-light';
  font-size: 1.8vh;
  text-align: center;
`
const Modal = (props) => {
  const toggle = useSelector((state) => state.beerlist.modalToggle);

  const dispatch = useDispatch();

  return (
    <ModalContainer toggle={toggle}>
      <Background onClick={() => { console.log(props.image_url); dispatch(setModalToggle(false)); }} />
      <ModalDiv>
        <Image image_url={props.image_url} />
        <Name>{props.name}</Name>
        <Tagline>{props.tagline}</Tagline>
        <Description>{props.description}</Description>
      </ModalDiv>
    </ModalContainer>
  )
}

export default Modal;
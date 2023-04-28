import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardContainer = styled.div `
  position    : relative;
  width       : 350px;
  height      : 190px;
  transition  : 0.5s;

  &:hover {
    height  : 450px;
  }
`

export const Lines = styled.div `
  position            : absolute;
  inset               : 0;
  overflow            : hidden;
  box-shadow          : 0px 0px 36px 4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow  : 0px 0px 36px 4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow     : 0px 0px 36px 4px rgba(0, 0, 0, 0.75);
  border-radius       : .5rem;                              /* Para que la card tenga bordes */
  /* background     : #2E873A; */

  ::before {
    content     : '';
    position    : absolute;
    top         : 50%;
    left        : 50%;
    transform   : translate(-50%, -50%);
    width       : 600px;
    height      : 120px;
    background  : linear-gradient(transparent, #8CCE19, #8CCE19 , #8CCE19, transparent);  /* Verde claro  #8CCE19 */
    animation   : animate 4s linear infinite;

    @keyframes animate {
      0% {
        transform  : translate(-50%, -50%) rotate(0deg);
      }
      
      100% {
        transform  : translate(-50%, -50%) rotate(360deg);
      }
    }
  }

  ::after {
    content           : '';
    position          : absolute;
    inset             : 3px;
    border-radius     : .5rem;  /* Para que la card tenga bordes */
    background-image  : linear-gradient(to right bottom, #c6e9a0, #cde8a4, #d3e6a8, #d8e5ac, #dce4b1, #dce4b1, #dce4b1, #dce4b1, #d8e5ac, #d3e6a8, #cde8a4, #c6e9a0);   /* Color de la card */
    
              /* ACA TENGO QUE PONER EL COLOR DEL FONDO DE LA CARD */
            
    /* background-image  : linear-gradient(to right bottom, #c6e9a0, #cae5a0, #cde1a0, #cfdda0, #d1d9a1, #d1d9a1, #d1d9a1, #d1d9a1, #cfdda0, #cde1a0, #cae5a0, #c6e9a0); */
    
    /* background-image  : linear-gradient(to right bottom, #c6e9a0, #cce7a2, #d0e4a4, #d5e2a6, #d8e0a9, #d8e0a9, #d8e0a9, #d8e0a9, #d5e2a6, #d0e4a4, #cce7a2, #c6e9a0); */
       

    /* background-image  : linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12); */

    /* background-image  : linear-gradient(to right bottom, #c6e9a0, #cee7a8, #d5e6b0, #dbe5b9, #dfe4c2, #dfe4c2, #dfe4c2, #dfe4c2, #dbe5b9, #d5e6b0, #cee7a8, #c6e9a0); */
  } 
`

export const ImgBox = styled.div ` /* Container de la img */
  position       : absolute;
  top            : -50px;
  left           : 50%;
  transform      : translateX(-50%);
  width          : 150px;
  height         : 150px;
    /* background     : #8CCE19; */
    box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.76);
   -webkit-box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.76);
   -moz-box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.76);
  transition     : 0.5s;
  z-index        : 10;
  overflow       : hidden;
  border-radius  : 50%;

  ${CardContainer}:hover & {
    width   : 250px;
    height  : 250px;
  }

  ::before {
    content     : '';
    position    : absolute;
    top         : 50%;
    left        : 50%;
    transform   : translate(-50%, -50%);
    width       : 500px;
    height      : 150px;
      /* background  : linear-gradient(transparent, #2E873A, #2E873A, #2E873A, transparent); */
    background  : linear-gradient(transparent, #8CCE19, #8CCE19, #8CCE19, transparent);
    animation   : animate2 4s linear infinite;

    @keyframes animate2 {
      0% {
        transform  : translate(-50%, -50%) rotate(360deg);
      }
      
      100% {
        transform  : translate(-50%, -50%) rotate(0deg);
      }
    }
  }

  ::after {
    content           : '';
    position          : absolute;
    inset             : 3px;
    border-radius     : 50%;
    background-color  : transparent;
  } 
`

export const CardImg = styled.img `
  position       : absolute;
  z-index        : 1;
  border-radius  : 50%;
  width          : calc(100% - 10px);
  height         : calc(100% - 10px);
  top            : 5px;
  left           : 5px;

  /* width: calc(100% - 20px);
  height: calc(100% - 20px);
  top: 10px; 
  left: 10px; */
`

export const Content = styled.div `
  position         : absolute;
  width            : 100%;
    /* height      : 103%; */
  height           : 100%;
  display          : flex;
  justify-content  : center;
  align-items      : flex-end;
  overflow         : hidden;
`

export const Details = styled.div`
    /* padding     : 40px; */
  /* display         : flex;
  flex-direction  : column; */
  padding         : 25px;
  text-align      : center;
  width           : 100%;
  transition      : 0.5s;
  transform       : translateY(140px);

  ${CardContainer}:hover ${Content} & {
    /* transform  : translateY(-15px); */
    transform  : translateY(0px);
  }
`

export const Nombre = styled.h2`
  font-family          : WubbaLubbaDubDub;
  font-size            : 2.6rem;
  font-weight          : 600;
  color                : #40B5CB;                             /* Azul claro */
  line-height          : 1.2em;
  white-space          : nowrap;
  overflow             : hidden;
  text-overflow        : ellipsis;
  -webkit-text-stroke  : 0.1px #133948;
  text-shadow          : 0px 0px 6px rgba(210,224,109,0.51),
                         0px 0px 6px rgba(210,224,109,0.51),
                        -0px 0px 6px rgba(210,224,109,0.51),
                         0px 0px 6px rgba(210,224,109,0.51);
  /* color: #1993C5; */  /* Azul mas fuerte */
    /* color: #3DA024; */
  /* color: #1993C5; */  /* Azul mas fuerte */
  /* color: #3DA024; */
  /* #D2E06D */
  /* line-height: 3em; */
`

export const Data = styled.div`
  display          : flex;
  justify-content  : space-evenly;
  margin           : 40px 0px;
  text-align       : center;
  /* gap: 3rem; */
`

export const InfoData = styled.h3`
  font-size    : 1em;
  color        : #D3D29F;
  line-height  : 1.2em;
  font-weight  : 600;
`

export const ButtonContainer = styled.div`
  display          : flex;
  justify-content  : center;
`

export const ButtonDetail = styled.button`
  padding       : 10px 30px;
  border        : none;
  outline       : none;
  border-radius : 5px;
  font-size     : 1em;
  font-weight   : 500;
  background    : #45f3ff;
  color         : #222;
  cursor        : pointer;
`

export const TrashIcon = styled(FontAwesomeIcon)`
  display        : inline-flex;
  font-size      : 1.2rem;
  padding        : .5rem;
  border-radius  : .25rem .25rem .75rem .25rem;
  position       : absolute;
  right          : -3rem;
  top            : 3px;
  transition     : 0.5s;
  color          : white;
  cursor         : pointer;
  outline        : none;
  border         : none;
  background     : #D68B8B;

  ${CardContainer}:hover & {
    right  : 3px;
    top    : 3px;
  }
  
  ${CardContainer}:hover &:hover {
    /* background  : #E13A3A; */
    background: #E52727;
    /* background: #DB1717; */
  } 
`
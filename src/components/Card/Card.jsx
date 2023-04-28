import React from 'react';
import { NavLink } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { CardContainer, Lines, ImgBox, TrashIcon, CardImg, Content, Details, Nombre, Data, InfoData, ButtonContainer, ButtonDetail} from './styledComponents'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) { /* Aca puse las props que estaban en cards, y como tengo sus nombres en vez de poner "props", mande directamente sus nombres en un objeto, o sea hice distructuring, sino mas abajo hubiese tenido que hacer "props."el nombre de cada propiedad"*/
   return (
      <CardContainer> 
         <Lines />
         <ImgBox>
            <CardImg src= {image} alt= 'img' />
         </ImgBox>
         <Content>
            <TrashIcon icon = {faTrash} onClick = { () => onClose(id) }></TrashIcon>
            <Details>
               <Nombre>{name}</Nombre>
               <Data>
                  <InfoData>{species}</InfoData>
                  <InfoData>{gender}</InfoData>
                  <InfoData>{status}</InfoData>
               </Data>
               <ButtonContainer>
                  <NavLink to = { `/detail/${id}` } >
                     <ButtonDetail>Details</ButtonDetail>
                  </NavLink>
                  {/* <ButtonDetail>Details</ButtonDetail> */}
               </ButtonContainer>
            </Details>
         </Content>
      </CardContainer>
   );
}

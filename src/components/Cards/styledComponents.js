import styled from "styled-components";

export const CardsContainer = styled.div `
    display                : grid;
    grid-template-columns  : repeat(auto-fit, minmax(270px, 1fr));
    row-gap                : 80px;
    column-gap             : 50px;
    max-width              : 1220px;
    margin                 : auto;
`
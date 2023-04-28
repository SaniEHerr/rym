import { createGlobalStyle } from "styled-components";
import WubbaLubbaDubDub from './WubbaLubbaDubDub.otf'

export default createGlobalStyle`
    @font-face {
        font-family: 'WubbaLubbaDubDub';
        src:  
          local('WubbaLubbaDubDub'),
          url(${WubbaLubbaDubDub}) format('truetype');
    }
`

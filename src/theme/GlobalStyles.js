import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');  
  *, *::before, *::after {  
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
    outline:none;

  }

  button{
    background:none;
  }
  
  html {
    font-size: 62.5%; 


    @media only screen and (min-width:425px){
      font-size: 67.5%; 
    }
    @media only screen and (min-width:500px){
      font-size: 70.5%; 
    }
     @media only screen and (min-width:750px){
      font-size: 75.5%; 
    }
    @media only screen and (min-width:1000px){
      font-size: 77.5%; 
    }
    @media only screen and (min-width: 1200px) {
      font-size: 80.5%; 
  }
  @media only screen and (min-width: 1400px) {
      font-size: 82.5%; 
  }
  @media only screen and (min-width: 1650px) {
      font-size: 85.5%; 
  }
   @media only screen and (min-width: 1800px) {
      font-size: 100%; 
  }
  }
  
  body {
    width:100%;
    height:auto;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    overflow-x:hidden;

     ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background: hsla(204, 26%, 96%, 1);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: hsla(152, 94%, 33%, 0.5);
  }
  }
  input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
    *:focus {
    outline-color:transparent;
   } 
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px; 
        // Facilita no calculo de medidas relativas
    }

    body {
        background-color: ${({ theme }) => theme.white};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1.6rem "Poppins", sans-serif;
    }

`;

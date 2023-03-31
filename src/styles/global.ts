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
        -webkit-font-smoothing: antialiased;
        background-color: ${({theme}) => theme.black400};

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 6px ${({theme}) => theme.white};
            background-color: ${({theme}) => theme.white};
            border: 1px solid ${({theme}) => theme.white};
        }
    }

    body, input, textarea, button {
        font: 400 1.6rem "Poppins", sans-serif;
    }

`;

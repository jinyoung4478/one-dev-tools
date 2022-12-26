import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        background-color: ${props => props.theme.bgColor};
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    };
    body{
        width:100%;
        padding:10px;
        margin:0;
        box-sizing:border-box;
        color:${({ theme }) => theme.text.primary};
        background-color:${({ theme }) => theme.background.default};
    }
`;

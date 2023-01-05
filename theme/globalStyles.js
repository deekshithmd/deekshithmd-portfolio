import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    color:${({ theme }) => theme.text.primary};
    background-color:${({ theme }) => theme.background.default};
}
`;

import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 97vh;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.background.hero};
  border-radius: 20px;
  box-shadow: 0p 0px 10px black;
  -webkit-box-shadow: 0px -1px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -1px 18px -3px rgba(0, 0, 0, 0.75);
  box-shadow: ${({ theme }) => theme.shadow.hero};
`;

export const Image = styled.img`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  border-radius: ${(props) => props.borderRadius || "0px"};
`;

export const Text = styled.p`
  font-size: ${(props) => `${props.fontSize}px` || "14px"};
  font-weight: ${(props) => props.fontWeight || 400};
  text-align: ${(props) => props.textAlign || "center"};
  margin-bottom: ${(props) => `${props.marginBottom}px` || "0px"};
`;

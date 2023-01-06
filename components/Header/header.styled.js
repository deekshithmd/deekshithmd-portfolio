import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img`
  width: ${(props) => props.width || "10px"};
  height: ${(props) => props.height || "10px"};
  cursor: pointer;
`;

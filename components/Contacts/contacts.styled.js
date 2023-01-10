import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 70%;
  display: grid;
  gap: 20px;
  grid-template-columns: auto;
  justify-content: center;
`;

export const ContactCard = styled.div`
  width: 200px;
  height: 50px;
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -1px 18px -3px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

export const LinkItem = styled.a`
  font-size: 18px;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
`;

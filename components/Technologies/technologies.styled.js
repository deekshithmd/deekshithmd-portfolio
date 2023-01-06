import styled from "styled-components";

export const SkillBadgeContainer = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 100px 100px;
  gap: 20px 10px;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: auto;
    grid-template-rows: 100px/6;
  }
  @media (max-width: 820px) {
    grid-template-columns: auto auto;
    grid-template-rows: 100px/3;
  }
`;

export const SkillBadge = styled.div`
  width: 230px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px -1px 18px -3px rgba(0, 0, 0, 0.75);
  padding: 10px 20px;
`;

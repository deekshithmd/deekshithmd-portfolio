import styled from "styled-components";

export const HeroContentContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  border-radius: 50%;
  position: relative;
  box-shadow: 0px -1px 18px -3px rgba(0, 0, 0, 0.75);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(209, 209, 209, 1) 100%
  );
`;

export const Item = styled.div`
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  top: ${(props) => props.top || "10px"};
  left: ${(props) => props.left || "-100px"};
  height: 80px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0px -1px 18px -3px rgba(0, 0, 0, 0.75);
  &:hover {
    cursor: pointer;
    transform: translate(20px, 0);
    -webkit-transform: translate(20px, 0);
    -moz-transform: translate(20px, 0);
    -o-transform: translate(20px, 0);
    -ms-transform: translate(20px, 0);
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
  }
`;

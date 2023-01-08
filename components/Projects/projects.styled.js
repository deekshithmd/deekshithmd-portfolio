import styled from "styled-components";

export const ProjectCardContent = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  text-align: center;
  border-radius: 20px;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ProjectCardContainer = styled.div`
  background-color: transparent;
  width: ${(props) => `${props.width}px` || "400px"};
  height: ${(props) => `${props.height}px` || "400px"};
  perspective: 1000px;
  cursor: pointer;
  &:hover ${ProjectCardContent} {
    transform: rotateY(180deg);
  }
`;

export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 20px;
  backface-visibility: hidden;
  background-color: red;
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  z-index: 1;
  border-radius: 20px;
  backface-visibility: hidden;
  background-color: blue;
`;

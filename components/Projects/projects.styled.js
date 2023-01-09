import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  overflow-x: auto;
`;

export const ProjectCardContent = styled.div`
  position: relative;
  width: 300px;
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
    transform: ${(props) => `rotateY(${props.tranform})`};
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

export const ButtonContainer = styled.div`
width:100%;
display flex;
justify-content:center;
gap:20px;
align-items:center;
padding:10px;
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 10px 15px;
  border: none;
`;

import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const ProjectCardContent = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
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
  background: ${({ theme }) => theme.background.projectfront};
  padding: 20px;
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  z-index: 1;
  border-radius: 20px;
  backface-visibility: hidden;
  background: ${({ theme }) => theme.background.projectback};
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 10px 15px;
  border: none;
  &:hover {
    background: ${(props) => props.hoverColor || "grey"};
  }
`;

export const ProjectContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const ForwardButton = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 25px;
  top: 50%;
  border-radius: 55px;
  padding: 10px 15px;
  border: none;
  z-index: 2;
  background: #525357;
`;

export const BackwardButton = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 25px;
  top: 50%;
  border-radius: 55px;
  padding: 10px 15px;
  border: none;
  z-index: 2;
  background: #525357;
`;

import styled from "styled-components";

export const HeroContainer = styled.div`
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

export const HeroContentContainer = styled.div`
  display: flex;
  justtify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
`;

export const Image = styled.img`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  background-color: red;
  border-radius: 50%;
`;

export const Item = styled.div`
  position: absolute;
  top: 10px;
  left: -100px;
  height: 100px;
  width: 100px;
  dipsplay: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid red;
`;

export const Item1 = styled.div`
  position: absolute;
  top: 130px;
  left: -150px;
  height: 100px;
  width: 100px;
  dipsplay: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid red;
`;
export const Item2 = styled.div`
  position: absolute;
  top: 260px;
  left: -200px;
  height: 100px;
  width: 100px;
  dipsplay: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid red;
  &:hover {
    height: 120px;
    width: 120px;
  }
`;

export const Item3 = styled.div`
  position: absolute;
  top: 360px;
  left: -150px;
  height: 100px;
  width: 100px;
  dipsplay: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid red;
  &:hover {
    height: 120px;
    width: 120px;
  }
`;

export const Item4 = styled.div`
  position: absolute;
  top: 460px;
  left: -100px;
  height: 100px;
  width: 100px;
  dipsplay: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid red;
  &:hover {
    height: 120px;
    width: 120px;
  }
`;

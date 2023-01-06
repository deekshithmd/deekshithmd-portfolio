import React from "react";
import {
  HeroContainer,
  HeroContentContainer,
  ContentWrapper,
  Image,
  Item,
  Item1,
  Item2,
  Item3,
  Item4,
} from "./hero.styled";
import { Header } from "../Header";

export const Hero = () => {
  return (
    <HeroContainer>
      <Header />
      <HeroContentContainer>
        <div>
          <h1>Hi,</h1>
          <h1> I am Deekshith M D</h1>
          <h2>Front End Developer</h2>
        </div>
        <ContentWrapper height="500px" width="500px">
          <Image
            src={"images/deekshith.png"}
            height="300px"
            width="300px"
            alt=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <Item>About</Item>
          <Item1>Projects</Item1>
          <Item2>Technologies</Item2>
          <Item3>Contact</Item3>
          <Item4>Experience</Item4>
        </ContentWrapper>
      </HeroContentContainer>
    </HeroContainer>
  );
};

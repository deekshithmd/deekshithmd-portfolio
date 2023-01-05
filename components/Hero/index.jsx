import React from "react";
import { Icon, HeaderContainer, HeroContainer, Image } from "./hero.styled";
import { useTheme } from "../../contexts/ThemeContext";
export const Hero = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <HeroContainer>
      <HeaderContainer>
        <h1>Deekshith M D</h1>
        <Icon
          onClick={() => toggleTheme()}
          src={isDarkTheme ? "images/dark.png" : "images/light.png"}
          height="30px"
          width="30px"
        />
      </HeaderContainer>
      <Image src={"images/deekshith.png"} height="500px" width="500px" alt="" />
    </HeroContainer>
  );
};

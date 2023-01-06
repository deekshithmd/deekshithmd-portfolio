import { HeaderContainer, Icon } from "./header.styled";
import { useTheme } from "../../contexts/ThemeContext";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <HeaderContainer>
      <h1>Deekshith M D</h1>
      <Icon
        onClick={() => toggleTheme()}
        src={isDarkTheme ? "images/dark.png" : "images/light.png"}
        height="30px"
        width="30px"
      />
    </HeaderContainer>
  );
};

import { useRouter } from "next/router";
import { HeaderContainer, Icon, LogoContainer } from "./header.styled";
import { useTheme } from "../../contexts/ThemeContext";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const router = useRouter();
  return (
    <HeaderContainer>
      <LogoContainer>
        <h1 onClick={() => router.push("/landing")}>Deekshith M D</h1>
      </LogoContainer>
      <Icon
        onClick={() => toggleTheme()}
        src={isDarkTheme ? "images/dark.png" : "images/light.png"}
        height="30px"
        width="30px"
      />
    </HeaderContainer>
  );
};

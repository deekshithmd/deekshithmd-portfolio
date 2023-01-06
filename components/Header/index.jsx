import { useRouter } from "next/router";
import { HeaderContainer, Icon } from "./header.styled";
import { useTheme } from "../../contexts/ThemeContext";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const router = useRouter();
  return (
    <HeaderContainer>
      <h1 onClick={() => router.push("/landing")}>D</h1>
      <Icon
        onClick={() => toggleTheme()}
        src={isDarkTheme ? "images/dark.png" : "images/light.png"}
        height="30px"
        width="30px"
      />
    </HeaderContainer>
  );
};

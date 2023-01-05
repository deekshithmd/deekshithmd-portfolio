import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import Theme from "../theme/Theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}

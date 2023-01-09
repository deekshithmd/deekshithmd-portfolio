export const lightTheme = {
  name: "light",
  text: {
    primary: "black",
    secondary: "grey",
    red: "red",
  },
  background: {
    default: "white",
    hero: `linear-gradient(
      90deg,
      rgba(228, 228, 228, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    )`,
    projectfront: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(226,226,226,1) 100%)`,
    projectback: `linear-gradient(90deg, rgba(254,254,254,1) 0%, rgba(189,233,249,1) 100%)`,
  },
  shadow: {
    hero: `0px -1px 18px -3px rgba(0, 0, 0, 0.75)`,
  },
};

export const darkTheme = {
  name: "dark",
  text: {
    primary: "white",
    secondary: "grey",
    blue: "blue",
  },
  background: {
    default: "white",
    hero: `linear-gradient(90deg, rgba(21,20,60,1) 0%, rgba(142,132,215,1) 100%)`,
    projectfront: `linear-gradient(90deg, rgba(43,44,61,1) 0%, rgba(5,17,22,1) 100%)`,
    projectback: `linear-gradient(90deg, rgba(51,97,103,1) 0%, rgba(20,40,47,1) 100%)`,
  },
  shadow: {
    hero: `0px -1px 18px -3px rgba(207,207,255,1)`,
  },
};

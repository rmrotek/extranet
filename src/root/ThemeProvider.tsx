import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { PropsWithChildren } from "react";

const myTheme = createTheme(/* custom styles */);

interface Props extends PropsWithChildren {}

export const ThemeProvider = ({ children }: Props) => {
  return <MuiThemeProvider theme={myTheme}>{children}</MuiThemeProvider>;
};

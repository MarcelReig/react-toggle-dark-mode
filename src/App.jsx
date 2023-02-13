import React, { useState } from "react";
import { Cover, Switch, Themes } from "./components";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Switch theme={theme} setTheme={setTheme} />
      <Cover theme={theme} />
    </ThemeProvider>
  );
}

export default App;

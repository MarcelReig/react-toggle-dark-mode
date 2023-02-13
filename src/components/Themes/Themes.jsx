import { darken } from 'polished'

const LightTheme =  {
  text: "#0f0e17",
  toggle: "#e53170",
  bg_color: "#fffffe",
  btn: "#ff8906",
  btn_text: "#fffffe",
  btn_hover: darken(0.10, "#ff8906"),
};

const DarkTheme = {
  text: "#fffffe",
  toggle: "#e53170",
  bg_color: "#0f0e17",
  btn: "#ff8906",
  btn_text: "#fffffe",
  btn_hover: darken(0.10, "#ff8906"),
};

const Themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export default Themes;
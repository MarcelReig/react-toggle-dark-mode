import React from "react";
import {
  CoverContainer,
  CoverWrapper,
  InfoContainer,
  CustomButton,
} from "./Cover.elements";
import { WiDaySunny, WiMoonWaningCrescent3 } from "react-icons/wi";

const Cover = (props) => {
  let icono = props.theme === "light" ? <WiDaySunny /> : <WiMoonWaningCrescent3 />;
  let leyenda = props.theme === "light" ? <h1>Light Mode</h1> : <h1>Dark Mode</h1>;

  return (
    <>
      <CoverContainer>
        <CoverWrapper>
          <InfoContainer>
            {icono}
            <h1>Hi, I'm in</h1>
            {leyenda}
            <CustomButton>Get Started</CustomButton>
          </InfoContainer>
        </CoverWrapper>
      </CoverContainer>
    </>
  );
};

export default Cover;

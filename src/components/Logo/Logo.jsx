import React, { PureComponent } from "react";
import styled from "styled-components";
import { createShadowComponent } from "./helpers";
import * as COLORS from "../../patterns/colors";
import logo from "../../images/logo.svg";

const Wrapper = styled.div`
  position: relative;
`;

const CyanShadow = createShadowComponent(COLORS.ABSOLUTE_CYAN, 15, -3);

const MagentaShadow = createShadowComponent(COLORS.ABSOLUTE_MAGENTA, 12, 6);

const YellowShadow = createShadowComponent(COLORS.ABSOLUTE_YELLOW, 20, -2);

const BlackShadow = createShadowComponent(COLORS.BLACK, 12, 0);

const LogoImage = styled.div`
  position: absolute;
  left: 10%;
  top: 10%;
  height: 80%;
  width: 80%;
  background-image: url(${logo});
`;

export default class Logo extends PureComponent {
  render() {
    const { ...props } = this.props;

    return (
      <Wrapper {...props}>
        <CyanShadow />
        <MagentaShadow />
        <YellowShadow />
        <BlackShadow />
        <LogoImage />
      </Wrapper>
    );
  }
}

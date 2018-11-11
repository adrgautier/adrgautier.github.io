import React, { PureComponent } from "react";
import styled, { ThemeProvider } from "styled-components";

import { BackgroundVideo, Section, Logo } from "../components";
import {
  NAMESPACE as SECTION,
  THEME_PROPERTIES as SECTION_THEME_PROPERTIES
} from "../components/Section";
import * as COLORS from "../patterns/colors";

const PositionnedSection = styled(Section)`
  position: relative;
`;

const PositionnedLogo = styled(Logo)`
  margin: 20vh auto;
  max-height: 256px;
  max-width: 256px;
  width: 80vw;
  height: 80vw;
`;

const PositionnedBackgroundVideo = styled(BackgroundVideo)`
  position: absolute;
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  height: 100%;
`;

export default class WelcomeSection extends PureComponent {
  get theme() {
    const { theme: descendantTheme } = this.props;
    const {
      BACKGROUND_COLOR: SECTION_BACKGROUND_COLOR
    } = SECTION_THEME_PROPERTIES;

    return inheritedTheme => ({
      [SECTION]: {
        [SECTION_BACKGROUND_COLOR]: COLORS.DARK_GREY
      },
      ...descendantTheme
    });
  }

  render() {
    const { theme, ...props } = this;

    return (
      <ThemeProvider theme={theme}>
        <PositionnedSection {...props}>
          <PositionnedBackgroundVideo src="https://giant.gfycat.com/FarawayEvilGermanwirehairedpointer.mp4" />
          <PositionnedLogo />
        </PositionnedSection>
      </ThemeProvider>
    );
  }
}

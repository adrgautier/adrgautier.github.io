import React, { PureComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Section, Button } from "../components";
import {
  NAMESPACE as SECTION,
  THEME_PROPERTIES as SECTION_THEME_PROPERTIES
} from "../components/Section";
import * as SPACING from "../patterns/spacing";
import * as COLORS from "../patterns/colors";

const PositionnedSection = styled(Section)`
  ${SPACING.CONTAINER}
  padding-top: 60px;
  padding-bottom: 60px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PositionnedButton = styled(Button)`
  margin: 40px 20px;
`;

export default class ResumeSection extends PureComponent {
  get theme() {
    const { theme: descendantTheme = {} } = this.props;

    const theme = {
      [SECTION]: {
        [SECTION_THEME_PROPERTIES.BACKGROUND_COLOR]: COLORS.DARK_GREY,
        [SECTION_THEME_PROPERTIES.COLOR]: COLORS.WHITE,
        [SECTION_THEME_PROPERTIES.TEXT_ALIGN]: "center"
      }
    };

    return inheritedTheme =>
      Object.assign(inheritedTheme, theme, descendantTheme);
  }

  render() {
    const { ...props } = this.props;
    return (
      <ThemeProvider theme={this.theme}>
        <PositionnedSection {...props}>
          <h1>Welcome !</h1>
          My name is Adrien Gautier, I am a Web developer living in Bordeaux.
          Have a look at some of my work on :
          <ButtonWrapper>
            <PositionnedButton to="https://github.com/adrgautier">
              Github
            </PositionnedButton>
            <PositionnedButton to="https://codepen.io/adrgautier">
              Codepen
            </PositionnedButton>
          </ButtonWrapper>
        </PositionnedSection>
      </ThemeProvider>
    );
  }
}

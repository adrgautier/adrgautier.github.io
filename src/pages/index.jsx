import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import themes from "../components/themes";
import { WelcomeSection, ResumeSection } from "../macros";
import * as TYPOGRAPHY from "../patterns/typography";
import Footer from "../components/Footer";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  ${TYPOGRAPHY.DEFAULT_FAMILY}
`;

const Wrapper = styled.main`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
`;

const PositionnedResumeSection = styled(ResumeSection)`
  flex-grow: 1;
  flex-shrink: 0;
`;

export default class HomePage extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <title>Adrien Gautier - Welcome</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          />
          <style type="text/css">{``}</style>
        </Helmet>
        <ThemeProvider theme={themes}>
          <Body>
            <Wrapper>
              <WelcomeSection />
              <PositionnedResumeSection />
            </Wrapper>
            <Footer />
          </Body>
        </ThemeProvider>
      </>
    );
  }
}

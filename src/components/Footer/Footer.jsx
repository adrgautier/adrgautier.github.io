import React, { PureComponent } from "react";
import styled from "styled-components";
import * as COLORS from "../../patterns/colors";
import * as SPACING from "../../patterns/spacing";

const Wrapper = styled.footer`
    ${SPACING.CONTAINER}
    background-color: ${COLORS.DARK_GREY};
    color: ${COLORS.GREY};
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export default class Footer extends PureComponent {
  render() {
    return <Wrapper>©2018</Wrapper>;
  }
}

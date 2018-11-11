import React, { PureComponent } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import { NAMESPACE, THEME_PROPERTIES } from "./constants";

// patterns
import * as SHAPES from "../../patterns/shapes";
import * as TYPOGRAPHY from "../../patterns/typography";

// helpers
import { themePropertyGetter } from "../../helpers";

const getThemeProperty = themePropertyGetter(NAMESPACE);

const style = css`
  display: block;
  ${SHAPES.THICK_BORDER}
  ${SHAPES.FULL_ROUNDED(14)}
  line-height: 24px;
  width: fit-content;
  max-width: 100%;
  border-color: ${getThemeProperty(THEME_PROPERTIES.BORDER_COLOR)};
  background-color: ${getThemeProperty(THEME_PROPERTIES.BACKGROUND_COLOR)};
  color: ${getThemeProperty(THEME_PROPERTIES.COLOR)};
  font-style: none;
  text-decoration: none;
  ${TYPOGRAPHY.ELLIPSIS}
`;

const StyledInternalLink = styled(Link)`
  ${style}
`;

const StyledLink = styled.a`
  ${style}
`;

export default class Button extends PureComponent {
  render() {
    const { children, to, ...props } = this.props;
    const internal = /^\/(?!\/)/.test(to);

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
      return (
        <StyledInternalLink to={to} {...props}>
          {children}
        </StyledInternalLink>
      );
    }
    return (
      <StyledLink href={to} {...props}>
        {children}
      </StyledLink>
    );
  }
}

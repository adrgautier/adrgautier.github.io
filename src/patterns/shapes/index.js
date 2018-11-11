import { css } from "styled-components";

export const THICK_BORDER = css`
  border: 2px solid;
`;

export const FULL_ROUNDED = radius => css`
  box-sizing: border-box;
  border-radius: ${radius}px;
  height: ${2 * radius}px;
  padding: 0 ${radius}px;
`;

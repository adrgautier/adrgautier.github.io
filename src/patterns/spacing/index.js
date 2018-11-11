import { css } from "styled-components";

export const CONTAINER = css`
  padding-left: calc(50vw - 480px);
  padding-right: calc(50vw - 480px);
  @media (max-width: 1000px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

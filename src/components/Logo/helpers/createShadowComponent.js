import styled from "styled-components";
import * as ANIMATIONS from "../../../patterns/animations";

export default (
  backgroundColor,
  animationDuration,
  animationDelay
) => styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-name: ${ANIMATIONS.SPIN}, ${ANIMATIONS.MORPH};
  animation-delay: ${animationDelay}s;
  animation-duration: ${animationDuration}s;
  animation-timing-function: ease-in-out, linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
  background-color: ${backgroundColor};
  mix-blend-mode: multiply;
`;

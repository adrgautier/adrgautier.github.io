import { keyframes } from "styled-components";

export const MORPH = keyframes`
    0% {
        border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    }
    100% {
        border-radius: 40% 60%;
    }
`;

export const SPIN = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

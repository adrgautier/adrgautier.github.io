import React, { PureComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Video = styled.video.attrs({
  autoPlay: true,
  loop: true,
  muted: true
})`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  min-height: 100%;
  transform: translateY(-50%);
  // while min-height allows the video to be cover the whole suface, the video object keep its ratio
  // object-fit allows the video to take advantage of the additionnal height
  object-fit: cover;
`;

export default class BackgroundVideo extends PureComponent {

  render() {
    const { src, ...props } = this.props;

    return (
      <Wrapper {...props}>
        <Video src={src} />
      </Wrapper>
    );
  }
}

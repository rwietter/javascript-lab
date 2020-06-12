import React from "react";

import { Parallax, Text, TextContainer, BackTwo, BackThree } from "./_styles";

function ContainerBackground() {
  return (
    <>
      <Parallax />
      <TextContainer>
        <Text>
          This div is just here to enable scrolling. Tip: Try to remove the
          background-attachment property to remove the scrolling effect.
        </Text>
      </TextContainer>
      <BackTwo />
      <TextContainer>
        <Text>
          This div is just here to enable scrolling. Tip: Try to remove the
          background-attachment property to remove the scrolling effect.
        </Text>
      </TextContainer>
      <BackThree />
    </>
  );
}
export default ContainerBackground;

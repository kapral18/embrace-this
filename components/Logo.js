import React from "react";
import styled from "styled-components";

const Logo = styled.img.attrs({
  width: 40,
  height: 40
})`
  ${({ isOnWhite }) => isOnWhite && "background: white"};
`;

export default ({ src, isOnWhite }) => {
  return <Logo src={src} isOnWhite={isOnWhite} />;
};

import React from "react";
import styled from "styled-components";

const This = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  text-indent: -245px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: auto;
  font-family: "Futura";
  font-weight: bold;
  font-size: 100px;
`;

export default _ => {
  return <This>embrace THIS</This>;
};

import React from 'react'
import styled from "styled-components";

const Link = styled.a`
	color: #fff;
`;

const OutLink = (props) => {
  return (
	<Link target="_blank" {...props} />
  );
}

export default OutLink;

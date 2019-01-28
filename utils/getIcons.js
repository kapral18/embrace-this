import styled from "styled-components";

export default (iconComponent) => styled(iconComponent).attrs({
	size: 32,
	title: ({ title }) => title
})`
	color: #039ff5
`;

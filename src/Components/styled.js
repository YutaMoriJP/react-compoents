import styled, { css } from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background: ${props => `var(--color-${props.index})`};
  border-radius: 5px;
  box-shadow: 4px 4px 9px #868e96;
  height: 80px;
  transition: 1s height ease-in-out;
  ${props =>
    props.open &&
    css`
      overflow-y: scroll;
      height: 400px;
    `}
`;
export default Wrapper;

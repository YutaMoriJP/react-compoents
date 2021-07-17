import styled from "styled-components";
import ComponentWrapper from "../Components/styled";

export default styled.article`
  display: flex;
  ${ComponentWrapper} & {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

import styled from "styled-components";
import ComponentWrapper from "../Components/styled";

export default styled.button`
  padding: 5px;
  border: 0;
  background: skyblue;
  font-size: 0.5rem;
  ${ComponentWrapper} & {
    margin: 0 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :active {
      transform: scale(0.9);
    }
    @media screen and (min-width: 600px) {
      padding: 12px;
      font-size: 1rem;
    }
  }
`;

import styled from "styled-components";
import LinkWrapper from "../Components/styled";

export default styled.a`
  text-decoration: 0;
  color: #f3d9fa;
  :hover {
    text-decoration: underline;
    font-weight: 500;
  }
  :active {
    font-weight: 900;
  }

  ${LinkWrapper} & {
    font-size: 0.6rem;
    text-align: right;
    padding: 2px 0;
    @media screen and (min-width: 600px) and (max-width: 899px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 900px) {
      font-size: 1.2rem;
    }
  }
`;

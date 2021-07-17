import styled from "styled-components";
//import { Wrapper as ComponentWrapper } from "../Components/index";
import ComponentWrapper from "../Components/styled";

import { Wrapper as IntroWrapper } from "../Intro";

import Block from "./Block";

export default styled.p`
  ${ComponentWrapper} & {
    font-size: 0.6rem;
    @media screen and (min-width: 600px) and (max-width: 899px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 900px) {
      font-size: 1.2rem;
    }
  }
  ${Block} & {
    text-indent: 10%;
    line-height: 28px;
    font-size: 0.6rem;
    @media screen and (min-width: 600px) {
      font-size: 1rem;
      line-height: 35px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.4rem;
      line-height: 35px;
    }
  }
  ${IntroWrapper} & {
    color: black;
    font-size: 1rem;
    text-align: left;
    line-height: 28px;
    margin: 0;
    padding: 0 5px;
  }
  color: white;
  font-weight: ${props => props.bold && 900};
`;

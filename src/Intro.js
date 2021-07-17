import styled from "styled-components";
import Text from "./styled/Text";

export const Wrapper = styled.article``;

const Intro = ({ children }) => (
  <Wrapper>
    <Text>{children}</Text>
  </Wrapper>
);

export default Intro;

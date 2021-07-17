import styled from "styled-components";

export default styled.article`
  background: #edf2ff;
  margin: auto;
  padding: 10px;
  max-width: 80%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 550px) {
    > * {
      margin: 5px;
    }
  }
`;

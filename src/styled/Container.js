import styled from "styled-components";

export default styled.article`
  background: #edf2ff;
  border-radius: 8px;
  box-shadow: 4px 4px 12px #868e96;
  margin: auto;
  padding: 20px;
  max-width: 80%;
  width: 1200px;
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

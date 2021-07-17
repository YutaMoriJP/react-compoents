import GlobalStyles from "./styled/GlobalStyle";
import Container from "./styled/Container";
import Component from "./Components/index";
import components from "./data/components";
import Intro from "./Intro";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Intro>
          Click on the `+` icon to learn more about the React component. The
          Demo involves an example of what the React component does, and you can
          see the source code by clicking on the CodeSandbox link.
        </Intro>
        {components.map((hook, index) => (
          <Component key={hook.id} index={index + 1} {...hook} />
        ))}
      </Container>
    </>
  );
}

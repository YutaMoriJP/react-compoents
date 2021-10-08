import GlobalStyles from "./styled/GlobalStyle";
import Container from "./styled/Container";
import Component from "./Components/index";
import components from "./data/components";
import Intro from "./Intro";
import useOpen from "./useOpen";
import { Modal } from "kantan-components";
import { useEffect } from "react";
export default function App() {
  const { open, onOpen, onClose } = useOpen();

  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <>
      {open ? <Modal handleClose={onClose}></Modal> : null}
      <GlobalStyles />
      <Container>
        <Intro>
          Click on the `+` icon to learn more about the React component. The
          Demo involves an example of what the React component does, and you can
          see the source code by clicking on the CodeSandbox link.
        </Intro>
        {components.map((component, index) => (
          <Component key={component.id} index={index + 1} {...component} />
        ))}
      </Container>
    </>
  );
}

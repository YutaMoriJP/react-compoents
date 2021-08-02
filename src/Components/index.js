import React from "react";
import Text from "../styled/Text";
import Link from "../styled/Link";
import LinkWrapper from "../styled/LinkWrapper";

import Button from "../styled/Button";
import Block from "../styled/Block";

import useOpen from "../useOpen";
import Article from "../styled/Wrapper";
//styled
import Wrapper from "./styled";

const Components = ({ name, demo, index, explanation, sandbox, github }) => {
  const { open, onOpen, onClose } = useOpen(false);
  return (
    <Wrapper index={index <= 5 ? index : index % 5} open={open ? 1 : 0}>
      <Article>
        <Text bold={1}>
          {name}
          <Button onClick={open ? onClose : onOpen}>{open ? "-" : "+"}</Button>
        </Text>
        <LinkWrapper>
          <Link href={demo} target="_blank" rel="noreferrer">
            Demo
          </Link>
          <Link href={sandbox || github} target="_blank" rel="noreferrer">
            {sandbox ? "CodeSandbox" : "Github"}
          </Link>
        </LinkWrapper>
      </Article>

      {open && (
        <Block>
          <Text>{explanation}</Text>
        </Block>
      )}
    </Wrapper>
  );
};

export default Components;

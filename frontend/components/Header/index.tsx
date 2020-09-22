import React from "react";
import { Logo } from "../Logo";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  padding: 2.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;

  ${media.lessThan("medium")`
    padding: 2.5rem 0 1rem;
  `}
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

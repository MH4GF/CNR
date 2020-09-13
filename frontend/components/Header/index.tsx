import React from "react";
import { Logo } from "../Logo";
import styled from "styled-components";

const Container = styled.div`
  padding: 2.5rem 0;
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

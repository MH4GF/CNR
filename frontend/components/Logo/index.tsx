import React from "react";
import Link from "next/link";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <H1>CNR</H1>
    </Link>
  );
};

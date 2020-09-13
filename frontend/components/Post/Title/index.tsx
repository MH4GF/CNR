import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Text = styled.a`
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  margin: 2rem 0;
`;

const Container = styled.div`
  margin: 2rem 0;
`;

type Props = {
  title: string;
  href: string;
  as: string;
};

const Title = ({ title, href, as }: Props): React.ReactElement => {
  return (
    <Container>
      <Link href={href} as={as}>
        <Text>{title}</Text>
      </Link>
    </Container>
  );
};

export default Title;

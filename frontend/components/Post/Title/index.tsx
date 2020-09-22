import React from "react";
import styled from "styled-components";
import Link from "next/link";
import media from "styled-media-query";

const Text = styled.a`
  font-weight: bold;
  font-size: 32px;
  text-decoration: none;
  cursor: pointer;
  margin: 2rem 0 1rem;
  display: block;

  ${media.lessThan("medium")`
    font-size: 24px;
  `}
`;

const DateSub = styled.a`
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  display: block;

  ${media.lessThan("medium")`
    font-size: 12px;
  `}
`;

const Container = styled.div`
  margin: 4rem 0;
`;

type Props = {
  title: string;
  href: string;
  as: string;
  date: string;
};

const Title = ({ title, href, as, date }: Props): React.ReactElement => {
  return (
    <Container>
      <Link href={href} as={as}>
        <Text>{title}</Text>
      </Link>
      <Link href={href} as={as}>
        <DateSub>{parsedDate(date)}</DateSub>
      </Link>
    </Container>
  );
};

const parsedDate = (str: string): string => {
  const date = new Date(str);

  return (
    date.getFullYear() +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + date.getDate()).slice(-2)
  );
};

export default Title;

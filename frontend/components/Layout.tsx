import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import styled from "styled-components";
import media from "styled-media-query";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  ${media.lessThan("medium")`
    padding: 0 1rem;
  `}
`;

const Layout = ({ children, title = "CNR" }: Props): React.ReactElement => (
  <Div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <footer />
  </Div>
);

export default Layout;

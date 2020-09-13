import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Div = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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

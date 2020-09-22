import React from "react";
import App from "next/app";
import "../assets/styles/_reset.css";
import "../assets/styles/_root.css";

export default class MyApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

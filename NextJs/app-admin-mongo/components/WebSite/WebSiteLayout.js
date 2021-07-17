import { Container, CssBaseline } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const WebSiteLayout = ({ title, selected, children }) => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header title={title} selected={selected} />

        {children}

        <Footer title={title} description="Casa de empeños Nuevo Sol" />
      </Container>
    </div>
  );
};

export default WebSiteLayout;

import Head from "next/head";
import React from "react";
import AppNavBar from "./AppNavBar";

const AdminLayout = ({ title, selected, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppNavBar title={title} selected={selected} />

      {children}
    </div>
  );
};

export default AdminLayout;

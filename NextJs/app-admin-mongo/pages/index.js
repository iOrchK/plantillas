import React from "react";
import Blog from "../components/WebSite/Blog";
import WebSiteLayout from "../components/WebSite/WebSiteLayout";

export default function Home() {
  return (
    <div>
      <WebSiteLayout title={"Inicio"} selected={0}>
        <Blog />
      </WebSiteLayout>
    </div>
  );
}

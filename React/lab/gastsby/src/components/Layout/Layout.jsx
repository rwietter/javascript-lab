import React from "react";
import "./Layout.css";
import Helmet from "react-helmet";
import config from "../../../data/config";

export default ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link />
    </Helmet>
    {/* o resto do conteúdo */}
  </div>
);

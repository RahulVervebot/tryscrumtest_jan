import React from "react";
import Layout from "./Layout";
import NavTwo from "./NavTwo";
import StudiosHeaders from "./VirtualHeader";
import Footer from "./Footer";
import Support from "./VirtualClass";

const VartualPage = () => {
  return (
    <Layout pageTitle="Tryscrum | Vartual Class">
      <NavTwo />
      <StudiosHeaders title="vartual" />
      <Support />
      <Footer />
    </Layout>

  );
};

export default VartualPage;
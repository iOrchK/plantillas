import React from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";

const title = "Empeños";
const selected = 4;

const Empenios = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <h3>{title}</h3>
      </AdminLayout>
    </div>
  );
};

export default Empenios;

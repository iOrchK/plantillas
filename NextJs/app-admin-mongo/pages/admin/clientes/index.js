import React from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";

const title = "Clientes";
const selected = 3;

const Clientes = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <h3>{title}</h3>
      </AdminLayout>
    </div>
  );
};

export default Clientes;

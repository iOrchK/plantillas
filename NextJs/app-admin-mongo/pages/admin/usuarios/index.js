import React from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";

const title = "Usuarios";
const selected = 8;

const Usuarios = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <h3>{title}</h3>
      </AdminLayout>
    </div>
  );
};

export default Usuarios;

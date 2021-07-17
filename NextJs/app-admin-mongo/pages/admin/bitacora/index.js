import React from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";

const title = "Bitácora";
const selected = 7;

const Bitacora = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <h3>{title}</h3>
      </AdminLayout>
    </div>
  );
};

export default Bitacora;

import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

const title = "Inicio";
const selected = 0;

const AdminHome = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <h3>{title}</h3>
      </AdminLayout>
    </div>
  );
};

export default AdminHome;

import React from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";

const title = "Remates";
const selected = 5;

const Remates = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <h3>{title}</h3>
      </AdminLayout>
    </div>
  );
};

export default Remates;

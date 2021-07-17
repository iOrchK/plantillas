import React from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";

const title = "Balance";
const selected = 6;

const Balance = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <h3>{title}</h3>
      </AdminLayout>
    </div>
  );
};

export default Balance;

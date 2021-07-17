import React from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";

const title = "Calendario mensual";
const selected = 2;

const CalendarioMensual = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <h3>{title}</h3>
      </AdminLayout>
    </div>
  );
};

export default CalendarioMensual;

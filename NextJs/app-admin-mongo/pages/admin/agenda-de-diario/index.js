import React from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";
import Agenda from "../../../components/Admin/AgendaDiario/Agenda";

const title = "Agenda de diario";
const selected = 1;

const AgendaDiario = () => {
  return (
    <div>
      <AdminLayout title={title} selected={selected}>
        <Agenda />
      </AdminLayout>
    </div>
  );
};

export default AgendaDiario;

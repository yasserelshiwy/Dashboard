import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header/Header";

import { Box } from "@mui/material";
import { columns, rows } from "./data";
import { Helmet } from "react-helmet-async";
export default function Invoices() {
  return (
    <div>
      <Helmet>
        <title>Invoices</title>
        <meta name="description" content="Invoices page Dashbaord wepsite" />
      </Helmet>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />{" "}
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </div>
  );
}

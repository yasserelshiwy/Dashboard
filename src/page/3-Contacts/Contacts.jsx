import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header/Header";

import { Box } from "@mui/material";
import { columns, rows } from "./data";
import { Helmet } from "react-helmet-async";
export default function Contacts() {
  return (
    <Box>
      <Helmet>
        <title>Contacts</title>
        <meta name="description" content="Contacts page Dashbaord wepsite" />
      </Helmet>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />

      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
}

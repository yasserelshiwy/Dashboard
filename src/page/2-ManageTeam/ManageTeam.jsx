import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import Header from "../../components/Header/Header";

import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
export default function ManageTeam() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <>
            <Helmet>
              <title>Team</title>
              <meta name="description" content="Team page Dashbaord wepsite" />
            </Helmet>
            <Box
              sx={{
                margin: "auto",

                marginTop: "10px",
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",

                backgroundColor:
                  access === "Admin"
                    ? theme.palette.primary.dark
                    : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
              }}
            >
              {access === "Admin" && (
                <AdminPanelSettingsOutlined
                  sx={{ color: "#fff" }}
                  fontSize="small"
                />
              )}

              {access === "Manager" && (
                <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}

              {access === "User" && (
                <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}

              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                {access}
              </Typography>
            </Box>
          </>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
}

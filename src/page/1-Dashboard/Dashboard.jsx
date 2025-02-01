import { Box, Button } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  return (
    <Box>
      <Helmet>
        <title>Dashborad</title>
        <meta name="description" content="home page Dashbaord wepsite" />
      </Helmet>
      <Header
        isDashboard={true}
        title={"DASHBOARD"}
        subTitle={"Welcome to your dashboard"}
      />
      <Box sx={{ textAlign: "right", mb: 1.3 }}>
        <Button
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}

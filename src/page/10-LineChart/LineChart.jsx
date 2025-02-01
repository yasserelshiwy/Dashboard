import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Chart from "./Chart";
import { Helmet } from "react-helmet-async";

export default function LineChart() {
  return (
    <Box>
      <Helmet>
        <title>Line Chart</title>
        <meta name="description" content="Line Chart page Dashbaord wepsite" />
      </Helmet>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Chart />
    </Box>
  );
}

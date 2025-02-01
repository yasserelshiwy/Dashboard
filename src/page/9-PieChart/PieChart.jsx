import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Chart from "./Chart";
import { Helmet } from "react-helmet-async";

export default function PieChart() {
  return (
    <div>
      {" "}
      <Box>
        <Helmet>
          <title>Pie Chart</title>
          <meta name="description" content="Pie Chart page Dashbaord wepsite" />
        </Helmet>
        <Header title="Pie Chart" subTitle="Simple Pie Chart" />

        <Chart />
      </Box>
    </div>
  );
}

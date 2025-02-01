import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import BarChart from "./BarChart";
import { Helmet } from "react-helmet-async";

export default function Bar() {
  return (
    <Box>
      <Helmet>
        <title>Bar Chart</title>
        <meta name="description" content="Bar Chart page Dashbaord wepsite" />
      </Helmet>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <BarChart />
    </Box>
  );
}

import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import ChartGeo from "./ChartGeo";
import { Helmet } from "react-helmet-async";

export default function Geography() {
  return (
    <Box>
      <Helmet>
        <title>Geography</title>
        <meta name="description" content="Geography page Dashbaord wepsite" />
      </Helmet>
      <Header title="Geography" subTitle="Simple Geography Chart" />
      <ChartGeo />
    </Box>
  );
}

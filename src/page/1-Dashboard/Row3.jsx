import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Chart from "../9-PieChart/Chart";
import Bar from "../8-BarChart/Bar";
import BarChart from "../8-BarChart/BarChart";
import ChartGeo from "../11-Geography/ChartGeo";

export default function Row3() {
  const theme = useTheme();

  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Chart isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <BarChart isDashbord={true} />
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <ChartGeo isDashbord={true} />
      </Paper>
    </Stack>
  );
}

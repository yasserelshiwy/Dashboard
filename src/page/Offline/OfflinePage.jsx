import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

export default function OfflinePage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        align="center"
        color={theme.palette.text.primary}
        variant="h5"
        sx={{ fontWeight: "900" }}
      >
        You are offline, please check your internet connection.
        <br />
        <br />
        DASHBOARD
      </Typography>
    </Box>
  );
}

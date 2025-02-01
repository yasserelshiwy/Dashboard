import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const NotFound = () => {
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
        Not-Foune Page 404
        <br />
        <br />
        Please check the path
      </Typography>
    </Box>
  );
};

export default NotFound;

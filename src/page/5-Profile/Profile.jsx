import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Alert, Button, Snackbar } from "@mui/material";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";

import { Helmet } from "react-helmet-async";
const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];
export default function Profile() {
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
  };

  return (
    <Box>
      <Helmet>
        <title>Create User</title>
        <meta name="description" content="Create User page Dashbaord wepsite" />
      </Helmet>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Account created successfully
            </Alert>
          </Snackbar>

          <TextField
            id="filled-basic"
            label="First Name"
            variant="filled"
            {...register("firstName", {
              required: true,
              minLength: 3,
              maxLength: 25,
            })}
            error={Boolean(errors.firstName)}
            helperText={
              errors.firstName
                ? "First Name is required && min 3 character"
                : null
            }
            sx={{ width: { xs: "100%", md: "50%" } }}
          />
          <TextField
            id="filled-basic"
            label="Last Name"
            variant="filled"
            {...register("LastName", {
              required: true,
              minLength: 3,
              maxLength: 25,
            })}
            error={Boolean(errors.LastName)}
            helperText={
              errors.LastName
                ? "Last Name is required && min 3 character"
                : null
            }
            sx={{ width: { xs: "100%", md: "50%" } }}
          />
        </Box>
        <TextField
          {...register("Email", {
            required: true,
            pattern: regEmail,
          })}
          error={Boolean(errors.Email)}
          helperText={
            errors.Email ? "Please provide a valid email address" : null
          }
          id="filled-basic"
          label="Email"
          variant="filled"
        />
        <TextField
          {...register("Number", {
            required: true,
            pattern: phoneRegExp,
          })}
          error={Boolean(errors.Number)}
          helperText={errors.Number ? "phoneRegExp" : null}
          id="filled-basic"
          label="Contact Number"
          variant="filled"
        />
        <TextField
          {...register("Adress1", {
            required: true,
            minLength: 3,
            maxLength: 25,
          })}
          error={Boolean(errors.Adress1)}
          helperText={
            errors.Adress1 ? " Adress1 is required && min 3 character" : null
          }
          id="filled-basic"
          label="Adress 1"
          variant="filled"
        />
        <TextField
          {...register("Adress2", {
            required: true,
            minLength: 3,
            maxLength: 25,
          })}
          error={Boolean(errors.Adress2)}
          helperText={
            errors.Adress2 ? " Adress2 is required && min 3 character" : null
          }
          id="filled-basic"
          label="Adress 2"
          variant="filled"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Admin"
          helperText="Please select your Role"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ ml: "auto" }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ textTransform: "capitalize", fontWeight: "900" }}
          >
            Create New User
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

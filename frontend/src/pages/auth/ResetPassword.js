import { Grid, TextField, Button, Box, Alert, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { React, useState } from "react";
import { useResetPasswordMutation } from "../../services/userAuthApi";

const ResetPassword = () => {
  const [server_error, setServerError] = useState({});
  const [resetPassword] = useResetPasswordMutation();
  // const { access_token } = getToken();
  const { id, token } = useParams();
  const [server_msg, setServerMsg] = useState({});

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"), // name of the field
      password2: data.get("password2"), // name of the field
    };
    const res = await resetPassword({ actualData, id, token });
    if (res.error) {
      console.log(typeof res.error.data.errors);
      console.log(res.error.data.errors);
      setServerMsg({});
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      setServerError({});
      setServerMsg(res.data);
      document.getElementById("password-reset-form").reset();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} sx={12}>
          <h1> Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-form"
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label="New Password"
            />

            {server_error.password ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
                {server_error.password[0]}
              </Typography>
            ) : (
              ""
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="password2"
              name="password2"
              type="password"
              label="Confirm New Password"
            />

            {server_error.password ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
                {server_error.password[0]}
              </Typography>
            ) : (
              ""
            )}
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Save
              </Button>
            </Box>
            {server_error.non_field_errors ? (
              <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
            ) : (
              ""
            )}
            {server_msg.msg ? (
              <Alert severity="success">{server_msg.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;

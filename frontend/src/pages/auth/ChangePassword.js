import { Typography, TextField, Button, Box, Alert } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../services/LocalStorageService";
import { useChangeUserPasswordMutation } from "../../services/userAuthApi";

const ChangePassword = () => {
  const [server_error, setServerError] = useState({});
  const [changeUserPassword] = useChangeUserPasswordMutation();
  const { access_token } = getToken();
  const [server_msg, setServerMsg] = useState({});

  // const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"), // name of the field
      password2: data.get("password2"), // name of the field
    };
    const res = await changeUserPassword({ actualData, access_token });
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(res.data);
      setServerError({});
      setServerMsg(res.data);
      document.getElementById("password-change-form").reset();
    }
  };
  // Getting User Data from Redux Store
  const myData = useSelector((state) => state.user);
  console.log("Change Password", myData);
  return (
    <>
      {/* {server_error.non_field_errors
        ? console.log(server_error.non_field_errors[0])
        : ""}
      {server_error.email ? console.log(server_error.email[0]) : ""}
      {server_error.password ? console.log(server_error.password[0]) : ""} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: 600,
          mx: 4,
        }}
      >
        <h1> Change Password </h1>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          id="password-change-form"
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
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
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
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
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
              Update
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
      </Box>
    </>
  );
};

export default ChangePassword;

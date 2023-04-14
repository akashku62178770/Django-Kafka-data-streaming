import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { useRegisterUserMutation } from "../../services/userAuthApi";
import {
  storeToken,
  getToken,
  removeToken,
} from "../../services/LocalStorageService";
import { Link } from "react-router-dom";
  
const Registration = () => {
  const [server_error, setServerError] = useState({});
  // const [error, setError] = useState({
  //   status: false,
  //   msg: "",
  //   type: "",
  // });

  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"), // name of the field
      password: data.get("password"),
      password2: data.get("password2"),
      tc: data.get("tc"),
    };
    const res = await registerUser(actualData);
    // console.log(res);
    if (res.error) {
      // console.log(typeof res.error.data.errors);
      // console.log(res.error.data.errors);
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      // console.log(typeof res.data);
      console.log(res.data);
      storeToken(res.data.token);
      alert("Registration successful ");
      navigate("/dashboard");
    }

    // console.log(actualData);
    // if (
    //   actualData.name &&
    //   actualData.email &&
    //   actualData.password &&
    //   actualData.tc !== null
    // ) {
    //   if (actualData.password === actualData.password2) {
    //     console.log(actualData);
    //     document.getElementById("registration-form").reset();
    //     setError({
    //       status: true,
    //       msg: "Registration Success",
    //       type: "success",
    //     });
    //     navigate("/dashboard");
    //   } else {
    //     setError({
    //       status: true,
    //       msg: "Passwords does not match",
    //       type: "error",
    //     });
    //   }
    // } else {
    //   setError({ status: true, msg: "All Fields are Required", type: "error" });
    // }
  };

  return (
    <>
      {/* {server_error.non_field_errors
        ? console.log(server_error.non_field_errors[0])
        : ""}
      {server_error.name ? console.log(server_error.name[0]) : ""}
      {server_error.email ? console.log(server_error.email[0]) : ""}
      {server_error.password ? console.log(server_error.password[0]) : ""}
      {server_error.password2 ? console.log(server_error.password2[0]) : ""}
      {server_error.tc ? console.log(server_error.tc[0]) : ""} */}
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
        />
        {server_error.name ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.name[0]}
          </Typography>
        ) : (
          ""
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        {server_error.email ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.email[0]}
          </Typography>
        ) : (
          ""
        )}

        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Password"
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
          label="Confirm Password"
        />
        {server_error.password2 ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.password2[0]}
          </Typography>
        ) : (
          ""
        )}

        <FormControlLabel
          control={<Checkbox value={true} color="primary" name="tc" id="tc" />}
          label="I agree to the terms and conditions."
        />
        <Link to="/T&C">T&C</Link>

        {server_error.tc ? (
          <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.tc[0]}
          </span>
        ) : (
          ""
        )}

        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Join
          </Button>
        </Box>
        {/* {error.status ? <Alert severity={error.type}> {error.msg}</Alert> : ""} */}
        {server_error.non_field_errors ? (
          <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};
export default Registration;

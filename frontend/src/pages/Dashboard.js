import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";
import {
  storeToken,
  getToken,
  removeToken,
} from "../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../features/authSlice";
import { useGetLoggedUserQuery } from "../services/userAuthApi";
import { useEffect, useState } from "react";
import { setUserInfo, unSetUserInfo } from "../features/userSlice";

const Dashboard = () => {
  const handleLogout = () => {
    dispatch(unSetUserInfo({ name: "", email: "" }));
    // console.log("Logout Clicked");
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/login");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      });
    }
  }, [data, isSuccess]);

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          email: data.email,
          name: data.name,
        })
      );
    }
  }, [data, isSuccess, dispatch]);

  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <h1>Dashboard</h1>
          <Typography variant="h5"> Email: {userData.email}</Typography>
          <Typography variant="h6"> Name: {userData.name} </Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;

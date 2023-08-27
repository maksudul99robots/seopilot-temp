"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography, Button, TextField } from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import AuthLogin from "../auth/AuthLogin";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { setAlert } from "@/app/GlobalRedux/Features/Alert/alertSlice";
import { useDispatch, useSelector } from 'react-redux';
import { ValidateEmail } from "@/app/services/emailValidation";
import { LoginRegistrationAPI } from "@/app/services/API";
import { setUserValue } from "@/app/services/UserService";
import { useRouter } from "next/navigation";
import LoadingButton from "@mui/lab/LoadingButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();


  const sendTokenToExtension = (token: string) => {
    console.log("running sendTokenToExtension()")
    chrome.runtime.sendMessage(
      "piejpplbpdbcpoajgopmnebbakbjlpkf", // Extension ID
      { action: "storeToken", token: "sdfjksdjfkSAJKDJsakjdkSAJDKsjakdj" },
      (response) => {
        console.log(response)
        if (response && response.success) {
          console.log("Token stored in extension's local storage.");
        } else {
          console.error("Failed to store token in extension.");
        }
      }
    );
  };
  useEffect(() => {
    if (email.length > 1)
      setIsEmailValid((ValidateEmail(email)))


  }, [email])

  useEffect(() => {
    if (email.length > 1 && isEmailValid && password.length > 6) {
      setDisable(false);
    } else {
      setDisable(true)
    }
  }, [email, password])



  const submit = () => {
    if ((email && email.length > 1)) {

      if (password && password.length < 7)
        dispatch(setAlert({ title: "Error", icon: 'error', text: "Password must be at least 6 characters long." }))
      else {
        setLoading(true)
        LoginRegistrationAPI.login({ email, password }).then((res) => {
          console.log(res)
          if (res.status == 200) {
            setLoading(false)
            sendTokenToExtension(res.data.token);
            localStorage.setItem("seo-pilot-token", res.data.token);
            setUserValue(res.data.token)
            router.push('/')
          }
        }).catch((error) => {
          setLoading(true)
          dispatch(setAlert({ title: "Error", icon: 'error', text: 'Unable to login' }))
        })

      }
    }
  }

  return (
    <PageContainer title="Forgot Password">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "#FCFCFC",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >

        <Box display="flex" alignItems="center" justifyContent="center" sx={{ paddingTop: "20vh" }}>
          {/* <Logo /> */}
        </Box>


        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "50vh" }}
        >

          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >


            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >

              <>
                <Stack>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      component="label"
                      htmlFor="email"
                      mb="5px"
                    >
                      Email
                    </Typography>
                    <TextField variant="outlined" fullWidth onChange={e => { setEmail(e.target.value) }} error={!isEmailValid} />
                  </Box>
                </Stack>
                <Box>
                  <LoadingButton
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                    style={{ color: !isEmailValid ? "#595959" : "white", marginTop: "30px" }}
                    onClick={() => submit()}
                    disabled={!isEmailValid}
                    loading={loading}
                    loadingPosition="end"

                  >
                    Send Verification Code
                  </LoadingButton>
                </Box>
                {/* {subtitle} */}
              </>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default ForgotPassword;

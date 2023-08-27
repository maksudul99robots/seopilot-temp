"use client"
import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  TextField,
  Card,
  Grid
} from "@mui/material";
import { LoadingButton } from '@mui/lab';

import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  submit?: any;
  setPassword?: any;
  setEmail?: any;
  isEmailValid?: boolean;
  disable?: boolean
  loading?: boolean
}

const AuthSetNewPassword = ({ title, subtitle, subtext, submit, setPassword, setEmail, isEmailValid, disable, loading }: loginType) => {
  return (


    <PageContainer title="Login" description="this is Login page">
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
               
                  {/* <Typography fontWeight="700" variant="h2" mb={1} display="flex" justifyContent="center">
                    Reset Password
                  </Typography> */}
                <Typography
                  variant="h5"
                  textAlign="center"
                  color="textSecondary"
                  mb={1}
                >
                  Reset Password
                </Typography>

                

                <Stack>
                  <Box mt="25px">
                    <Box display='flex' justifyContent='space-between'>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="password"
                        mb="5px"
                      >
                        Password
                      </Typography>

                    </Box>

                    <TextField type="password" variant="outlined" fullWidth onChange={e => { setPassword(e.target.value) }} />
                  </Box>
                  <Box mt="25px">
                    <Box display='flex' justifyContent='space-between'>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="password"
                        mb="5px"
                      >
                        Confirm Password
                      </Typography>

                    </Box>

                    <TextField type="password" variant="outlined" fullWidth onChange={e => { setPassword(e.target.value) }} />
                  </Box>
                </Stack>
                <Box>
                  <LoadingButton
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                    style={{ color: disable ? "#595959" : "white", marginTop:"30px" }}
                    onClick={() => submit()}
                    disabled={disable}
                    loading={loading}
                    loadingPosition="end"

                  >
                    Save Password
                  </LoadingButton>
                </Box>
                {/* {subtitle} */}
              </>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>


  )


}




export default AuthSetNewPassword;

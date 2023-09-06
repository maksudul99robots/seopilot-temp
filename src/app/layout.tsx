"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Providers } from "./GlobalRedux/provider";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { getUserValue } from "./services/UserService";
import SweetAlert from "./(DashboardLayout)/components/alert/SweetAlert";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const publicRoutes = ['/authentication/login', '/authentication/register','/authentication/forgot-password', '/token','/reset-password', '/verify-email'];
  const isPublicRoute = publicRoutes.includes(usePathname());


  useEffect(() => {
    // Check if it's a public route and user is authenticated
    if (isPublicRoute && isAuthenticated()) {
      router.push('/'); // Redirect to home if already authenticated
    }
    // Check if it's a private route and user is not authenticated
    else if (!isPublicRoute && !isAuthenticated()) {
      router.push('/authentication/login'); // Redirect to login if not authenticated
    }
  }, [usePathname()]);



  const isAuthenticated = () => {

    if (localStorage?.getItem("seo-pilot-token"))
      {
        if(localStorage?.getItem("seo-pilot-token") != '')
          return true;
        return false;
      }
       // Replace this with your actual authentication logic
    return false
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Providers>
            <SweetAlert>
              {children}

            </SweetAlert>

          </Providers>

        </ThemeProvider>
      </body>
    </html>
  );
}

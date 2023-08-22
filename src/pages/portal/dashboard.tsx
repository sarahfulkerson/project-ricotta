import { Inter } from "next/font/google";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });

// The main header fetches the current username out of the client-side
// stored JWT, so cannot be server-side prerendered
import dynamic from "next/dynamic";
const MainHeader = dynamic(() => import("@/components/main_header"), {
  ssr: false,
});

export default function Dashboard() {
  const theme = useTheme();

  return (
    <main className="body">
      <div>
        <MainHeader />
        <Typography variant="h1">
          Lasagna Love Dashboard
        </Typography>
      </div>
    </main>
  );
}

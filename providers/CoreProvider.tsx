"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SideSheetProvider } from "contexts/SideSheetContext";
import { ItemProvider } from "contexts/ItemContext";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
const queryClient = new QueryClient();

export function CoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ItemProvider>
          <SideSheetProvider>
            {children}
          </SideSheetProvider>
        </ItemProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

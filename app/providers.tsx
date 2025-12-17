"use client";

import React, { useMemo } from "react";
import { DaimoPayProvider, getDefaultConfig } from "@daimo/pay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const config = useMemo(
    () =>
      createConfig(
        getDefaultConfig({
          appName: "Daimo Pay Demo",
        })
      ),
    []
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <DaimoPayProvider>{children}</DaimoPayProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

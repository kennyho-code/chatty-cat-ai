"use client";
import { ReactNode, useState } from "react";

import useScreenSize from "@/utils/useScreenSize";
import { twMerge } from "tailwind-merge";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function ResponsiveLayout({ children }: { children: ReactNode }) {
  const { isMobile } = useScreenSize();

  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return <Layout>{children}</Layout>;
}

export default ResponsiveLayout;

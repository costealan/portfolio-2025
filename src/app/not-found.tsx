"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function NotFound() {
  const pathName = usePathname();

  return <h1 className="text-base-blue text-8xl">404 {pathName} not-found</h1>;
}

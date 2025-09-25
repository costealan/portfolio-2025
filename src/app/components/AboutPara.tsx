import React, { ReactNode } from "react";

export default function AboutPara({ children }: { children: ReactNode }) {
  return (
    <>
      <p className="text-base-blue text-lg md:pb-14">{children}</p>
    </>
  );
}

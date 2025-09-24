import { ReactNode } from "react";

type ProjectWrapperType = {
  title: string;
  stack: string;
  children: ReactNode;
};

export function ProjectWrapper({ title, stack, children }: ProjectWrapperType) {
  return (
    <section className="pb-15">
      <h3 className="text-dark-blue text-2xl">{title}</h3>
      <p className="text-base-blue text-xs pb-2">{stack}</p>
      {children}
    </section>
  );
}

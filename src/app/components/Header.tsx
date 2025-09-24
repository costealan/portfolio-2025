import React from "react";

export default function Header() {
  return (
    <header className="lg:flex-1 md:flex md:flex-col md:pb-10">
      <h1 className="text-5xl text-dark-blue font-bold">Alan Coste</h1>
      <h3 className="text-2xl text-base-blue">Fullstack developer</h3>
      <p className="pt-5 text-base-blue lg:block md:hidden">
        I build <em className="text-highlight-blue">accesible</em> fullstack
        applications for the web
      </p>
    </header>
  );
}

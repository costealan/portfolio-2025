import React from "react";

export default function Header() {
  return (
    <header className="flex-1 font-bold">
      <h1 className="text-5xl text-dark-blue">Alan Coste</h1>
      <h3 className="text-2xl text-base-blue">Fullstack developer</h3>
      <p className="pt-5 text-base-blue">
        I build <em className="text-highlight-blue">accesible</em> fullstack
        applications for the web
      </p>
    </header>
  );
}

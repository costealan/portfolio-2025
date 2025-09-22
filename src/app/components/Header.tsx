import React from "react";

export default function Header() {
  return (
    <header className="flex-1">
      <div>
        <h1>Alan Coste</h1>
        <h3>Fullstack developer</h3>
        <p>
          I build <em>accesible</em> fullstack applications for the web
        </p>
      </div>
      <nav>
        <p>About</p>
        <p>Projects</p>
      </nav>
    </header>
  );
}

import React from "react";
import { Navbar } from "react-bootstrap";
import "./styles.css";

export default function NavbarFix() {
  return (
    <nav>
      <div className="barra">
        <Navbar className="name">
          <div className="p-1">Filmes</div>
        </Navbar>
      </div>
    </nav>
  );
}

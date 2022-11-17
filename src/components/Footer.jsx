import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Designed By Amar in {year}</p>
    </footer>
  );
}

export default Footer;

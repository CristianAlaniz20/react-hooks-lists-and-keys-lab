import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkComponent = links.map(link => {
    const href = `#${link}`
    return <a key={link} href={href}>{link}</a>
  })

  return <nav>{linkComponent}</nav>;
}

export default NavBar;

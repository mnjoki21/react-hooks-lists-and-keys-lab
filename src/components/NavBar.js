import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const useLinks = links.map((link)=> (
    <a key ={link} href= {"#" + link}>{link}</a>
  ))

  

  return (
  <nav>{useLinks}</nav>
  )
  }  

export default NavBar;

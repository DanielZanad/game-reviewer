import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 w-screen h-24 ">
      <img src={logo} alt="site logo" className="h-40" />

      <div className="flex space-x-8">
        <a href="/">SIGN IN</a>
        <a href="/">CREATE ACCOUNT</a>
        <a href="/">GAMES</a>
        <a href="/">GAMES</a>
        <a href="/">LIST</a>
        <a href="/">START NEW LIST</a>
        <input type="text" className="rounded "/>
      </div>
    </div>
  );
}

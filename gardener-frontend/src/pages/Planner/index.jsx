import React from "react";
import styles from "../../style";

function Header() {}

export default function Planner() {
  return (
    <div className="container mx-auto px-4">
      <nav className="flex items-center justify-between p-4">
        <div>
          <img
            src="/logo.svg"
            alt="Gargen Savvy"
            className="w-[120] h-[56]"
          ></img>
        </div>
        <div>
          <button className="bg-[#0A54362E] border-[4] mx-4 p-2">Login</button>
          <button className="bg-[#0A5436] border-[4] mx-4 p-2">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}

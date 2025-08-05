import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-3 px-4">
      <h1 className="font-cherry text-2xl">LilHelp</h1>
      <ul className="flex gap-6 items-center px-6 p-2 rounded-full border-2 border-muted bg-secondary">
        <Link className="font-poppins text-base font-medium">Home</Link>
        <Link to="/" className="font-poppins text-base font-medium">Dashboard</Link>
      </ul>
      <Link to="/login">
        <button className="font-poppins  p-2 w-28 bg-secondary rounded-full text-neutral text-base border-2 border-muted font-medium">
          Log In
        </button>
      </Link>
    </header>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="text-[#23BE0A] btn border-[#23BE0A]">Home</li>
      </Link>

      <Link to="/#books">
        <li>Listed Books</li>
      </Link>

      <li>Pages to Read</li>

      <Link to="/about">
        <li>About</li>
      </Link>
    </>
  );
  return (
    <div className="flex px-7 mx-auto justify-between shadow rounded items-center py-5">
      <div className="">
        <a className="text-3xl font-bold">Boi Vibe</a>
      </div>
      <div>
        <ul className="flex gap-5 items-center">{links}</ul>
      </div>
      <div className="flex gap-5">
        <button className="btn rounded bg-[#23BE0A] text-white">Sign In</button>
        <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

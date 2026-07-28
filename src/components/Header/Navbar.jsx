import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li className="text-[#23BE0A] btn border-[#23BE0A]">Home</li>
      <li>Listed Books</li>
      <li>Pages to Read</li>
    </>
  );
  return (
    <div className="flex max-w-6xl mx-auto justify-between items-center py-5">
      <div className="">
        <a className="text-3xl font-bold">Boi Vive</a>
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

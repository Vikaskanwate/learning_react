import React from "react";

function Header() {
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-semibold">
        Hello <br />
        <span className="text-3xl font-semibold">Vikas 👋</span>
      </h1>
      <button className="bg-red-500 py-2 px-5 rounded-sm font-medium text-lg">Logout</button>
    </div>
  );
}

export default Header;

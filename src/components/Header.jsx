import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20">
      <h2 className="text-lg font-bold">
        Notifications{" "}
        <span className="text-sm bg-Blue px-2 py-0 ml-2 rounded text-white">
          3
        </span>
      </h2>

      <p className="text-DarkGrayishBlue text-sm">Mark all as read</p>
    </header>
  );
}

import React from "react";

export default function Header({ count }) {
  return (
    <header className="flex justify-between items-center h-20">
      <h2 className="text-lg font-bold">
        Notifications{" "}
        <span className="text-sm bg-Blue px-2 py-0 ml-2 rounded text-white">
          {count}
        </span>
      </h2>

      <p className="text-DarkGrayishBlue text-sm cursor-pointer">
        Mark all as read
      </p>
    </header>
  );
}

import React from "react";

const Notification = () => {
  return (
    <article className="mb-3 text-xs flex p-2 gap-3 bg-VeryLightGrayishBlue2 rounded-lg">
      <div className="min-w-max">
        <img
          className="w-9"
          src="src/assets/images/avatar-mark-webber.webp"
          alt="avatar"
        />
      </div>
      <div>
        <div className="flex">
          <p className="after:ml-1 after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full after:bg-Red after:inline-block">
            <span className="font-bold text-VeryDarkBlue">Mark Webber</span>{" "}
            <span className="text-GrayishBlue">
              reacted to your recent post
            </span>{" "}
            <span className="text-DarkGrayishBlue ">
              My first tournament today!
            </span>{" "}
            <a href="#" className="text-Blue">
              {"Chess Club"}
            </a>
          </p>
          <div className="min-w-max">
            <img
              className="ml-2 w-9"
              src="src/assets/images/image-chess.webp"
              alt="avatar"
            />
          </div>
        </div>
        <p className="text-GrayishBlue">1m ago</p>
        <blockquote className="text-GrayishBlue mt-2 border border-GrayishBlue border-opacity-20 p-2 rounded-sm">
          {
            "Hello, thanks for setting up the Chess Club, I've been a member for a few weeks now and I'm already having lots of fun and improving my game"
          }
        </blockquote>
      </div>
    </article>
  );
};

export default Notification;

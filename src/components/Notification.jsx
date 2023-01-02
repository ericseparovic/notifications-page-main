import React from "react";

const Notification = ({ notification, changeStatus }) => {
  const { avatar, date, group, id, img, message, name, status, subject, tag } =
    notification;

  return (
    <article
      className={`
        ${
          status
            ? "cursor-pointer mb-3 text-xs flex  p-2 gap-3 bg-white rounded-lg leading-5"
            : "cursor-pointer mb-3 text-xs flex  p-2 gap-3 bg-VeryLightGrayishBlue2 rounded-lg leading-5"
        }
          `}
      onClick={() => changeStatus(id)}
    >
      <div className="min-w-max">
        <img className="w-9" src={avatar} alt="avatar" />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <p
              className={
                !status
                  ? "after:ml-1 after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full after:bg-Red after:inline-block"
                  : undefined
              }
            >
              <span className="font-bold text-VeryDarkBlue pr-1">{name}</span>{" "}
              <span className="text-GrayishBlue">{subject}</span>{" "}
              <span className="text-DarkGrayishBlue ">{tag}</span>{" "}
              <a href="#" className="text-Blue">
                {group}
              </a>
            </p>

            <p className="text-GrayishBlue">{date}</p>
          </div>
          {img && (
            <div className="min-w-max">
              <img className="ml-2 w-9" src={img} alt="avatar" />
            </div>
          )}
        </div>

        {message && (
          <blockquote className="text-GrayishBlue mt-2 border border-GrayishBlue border-opacity-20 p-2 rounded-sm">
            {message}
          </blockquote>
        )}
      </div>
    </article>
  );
};

export default Notification;

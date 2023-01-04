import Notification from "./Notification";
import { useEffect } from "react";

const Notificatons = ({
  setCount,
  data,
  isLoading,
  notifications,
  setNotifications,
}) => {
  const notificationsPending = notifications.filter((notification) => {
    if (!notification.status) return notification;
  });

  // Change status notification
  function changeStatus(id) {
    const notificationsUpdate = notifications.filter((notification) => {
      if (notification.id === id) {
        notification.status = true;
        return notification;
      } else {
        return notification;
      }
    });

    setNotifications(notificationsUpdate);
  }

  useEffect(() => {
    setCount(notificationsPending.length);
  }, [notificationsPending]);

  useEffect(() => {
    setNotifications(data);
  }, [data]);

  if (isLoading) {
    return (
      <>
        <h1>Cargando</h1>
      </>
    );
  }

  return (
    <>
      {notifications.map((notification) => {
        return (
          <Notification
            notification={notification}
            key={notification.id}
            changeStatus={changeStatus}
          />
        );
      })}
    </>
  );
};

export default Notificatons;

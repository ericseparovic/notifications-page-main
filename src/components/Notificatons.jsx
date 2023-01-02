import { useFetch } from "../Hooks/useFetch";
import Notification from "./Notification";
import { useEffect } from "react";

const Notificatons = ({ setCount }) => {
  const { data, isLoading, hasError } = useFetch("src/data/users.json");

  const notificationsPending = data.filter((data) => {
    if (!data.status) return data;
  });

  useEffect(() => {
    setCount(notificationsPending.length);
  }, [notificationsPending]);

  if (isLoading) {
    return (
      <>
        <h1>Cargando</h1>
      </>
    );
  }
  return (
    <>
      {data.map((data) => {
        return <Notification data={data} key={data.id} />;
      })}
    </>
  );
};

export default Notificatons;

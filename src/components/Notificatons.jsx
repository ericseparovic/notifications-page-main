import { useFetch } from "../Hooks/useFetch";
import Notification from "./Notification";
import { useState } from "react";

const Notificatons = () => {
  const { data, isLoading, hasError } = useFetch("src/data/users.json");
  const [count, setCount] = useState(0);

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

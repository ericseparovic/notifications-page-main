import { useFetch } from "../Hooks/useFetch";
import Notification from "./Notification";

const Notificatons = () => {
  const { data, isLoading, hasError } = useFetch("src/data/users.json");

  console.log(data, isLoading, hasError);

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
        return <Notification data={data} />;
      })}
    </>
  );
};

export default Notificatons;

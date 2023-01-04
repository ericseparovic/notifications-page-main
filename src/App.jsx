import Header from "./components/Header";
import Notificatons from "./components/Notificatons";
import { useState } from "react";
import { useFetch } from "./Hooks/useFetch";

function App() {
  const [count, setCount] = useState(0);
  // Get data of json
  const { data, isLoading, hasError } = useFetch("src/data/users.json");
  const [notifications, setNotifications] = useState(data);

  function markAll() {
    const notificationsUpdate = notifications.filter((notification) => {
      notification.status = true;
      return notification;
    });

    setNotifications(notificationsUpdate);
  }

  return (
    <div className="containejr mx-auto font-jakartaSans px-4 max-w-xl bg-white py-2 sm:mt-10 rounded">
      <Header count={count} markAll={markAll} />
      <main>
        <Notificatons
          setCount={setCount}
          data={data}
          isLoading={isLoading}
          notifications={notifications}
          setNotifications={setNotifications}
        />
      </main>
    </div>
  );
}

export default App;

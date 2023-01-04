import Header from "./components/Header";
import Notificatons from "./components/Notificatons";
import { useState } from "react";
import { useFetch } from "./Hooks/useFetch";

function App() {
  const [count, setCount] = useState(0);
  // Get data of json
  const { data, isLoading, hasError } = useFetch("src/data/users.json");

  return (
    <div className="containejr mx-auto font-jakartaSans px-4 max-w-xl bg-white py-2 sm:mt-10 rounded">
      <Header count={count} />
      <main>
        <Notificatons setCount={setCount} data={data} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;

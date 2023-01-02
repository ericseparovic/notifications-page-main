import Header from "./components/Header";
import Notificatons from "./components/Notificatons";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="containejr mx-auto font-jakartaSans px-4 max-w-xl bg-white py-2 sm:mt-10 rounded">
      <Header count={count} />
      <main>
        <Notificatons setCount={setCount} />
      </main>
    </div>
  );
}

export default App;

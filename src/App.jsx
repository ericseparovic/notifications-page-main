import Header from "./components/Header";
import Notificatons from "./components/Notificatons";

function App() {
  return (
    <div className="containejr mx-auto font-jakartaSans px-4 max-w-xl bg-white py-2 sm:mt-10 rounded">
      <Header />
      <main>
        <Notificatons />
      </main>
    </div>
  );
}

export default App;

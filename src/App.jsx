import Header from "./components/Header";
import Notificatons from "./components/Notificatons";

function App() {
  return (
    <div className="container mx-auto font-jakartaSans px-4">
      <Header />
      <main>
        <Notificatons />
      </main>
    </div>
  );
}

export default App;

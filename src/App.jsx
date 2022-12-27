function App() {
  return (
    <div className="container mx-auto font-jakartaSans px-4">
      <header className="flex justify-between items-center h-20">
        <h2 className="text-xl font-bold">
          Notifications{" "}
          <span className="bg-Blue px-2 py-0 ml-3 rounded-lg text-white">
            3
          </span>
        </h2>

        <p className="text-DarkGrayishBlue">Mark all as read</p>
      </header>
      <main>
        <article>
          <div>
            <img src="src/assets/images/avatar-mark-webber.webp" alt="avatar" />
          </div>
          <div>
            <p>
              <span>Mark Webber</span>
              reacted to your recent post My first tournament today!
            </p>
            <p>1m ago</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;

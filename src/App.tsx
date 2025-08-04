import "./App.css";
import CharacterView from "./views/characterView";

function App() {
  return (
    <section class="w-full grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header class="bg-red-600 text-center">header</header>
      <main class="bg-green-600 text-center">
        <CharacterView />
      </main>
      <footer class="bg-blue-600 text-center">footer</footer>
    </section>
  );
}

export default App;

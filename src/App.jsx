import { About } from "./components/About";
import { Contact } from './components/Contact'
import { Projects } from "./components/Projects";
import { Leptos } from "./components/lep";

function App() {
  return (
    <main className="bg-slate-100">
      <About/>

      {/* <Projects /> */}
      <Leptos/>

      <Contact />

    </main>
  );
}

export default App;

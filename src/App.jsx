import { About } from "./components/About";
import { Contact } from './components/Contact'
import { Projects } from "./components/Projects";

function App() {
  return (
    <main className="bg-slate-100">
      <About/>

      <Projects />

      <Contact />

    </main>
  );
}

export default App;

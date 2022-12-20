import { Navbar } from "./components/Nav";
import { About } from "./components/About";
import { Contact } from './components/Contact'
import { Projects } from "./components/Projects";

function App() {
  return (
    <main className="">
      <Navbar />
      <About />

      <Projects />

      <Contact />

    </main>
  );
}

export default App;

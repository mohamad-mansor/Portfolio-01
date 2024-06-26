import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-900 dark:text-white">
      <Header />
      <main>
        <Home />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;

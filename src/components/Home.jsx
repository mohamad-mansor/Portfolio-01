//Home.jsx Component
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl font-bold">Mohamad Mansor</h1>
      <h2 className="text-3xl mt-4">
        <Typewriter
          options={{
            strings: ["Passionate web developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => (window.location.href = "mailto:m.m.alhajr@web.de")}
      >
        Contact Me
      </button>
    </section>
  );
};

export default Home;

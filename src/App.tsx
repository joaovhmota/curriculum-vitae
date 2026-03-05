import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;

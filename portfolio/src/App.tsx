import react from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./pages/TypingProject";

//pallette: https://coolors.co/d8dbe2-a9bcd0-58a4b0-373f51-1b1b1e

function App() {
  return (
    <div className=" bg-gray-500 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <Container>
        <Header />
        <Main />
        <Projects />
      </Container>

      <Footer />
    </div>
  );
}

export default App;

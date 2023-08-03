import "./App.scss";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Objectives from "./components/objectives/objectives";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Main />
        <About />
        <Objectives />
        <Projects />
        <Contacts />
      </div>
        <Footer />
    </div>
  );
}

export default App;

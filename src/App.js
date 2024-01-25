import Header from "./Header";
import Textarea from "./Textarea";
import Footer from "./Footer";
import "./index.css";

function App() {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <div className="App">
      <Header />
      <Textarea />
      <p id="preview">Hello {handleNameChange()}!</p>
      <Footer />
    </div>
  );
}

export default App;

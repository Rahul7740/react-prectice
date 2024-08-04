import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Changetheme } from "./contaxt/Prectice";
import { Texterea } from "./components/Texterea";
import { ColorProvider } from "./contaxt/colorRed";

function App() {
  return (
    <>
      <ColorProvider>
      <Changetheme>
        <Home />
      </Changetheme>
      </ColorProvider>

      <Texterea/>
    </>
  );
}

export default App;

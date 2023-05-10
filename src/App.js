import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
import Home from "./page/Home";
import Detail from "./page/detail/Detail";
function App() {
  return (
    <div className="App">
      <CountryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<Detail />} />
        </Routes>
      </CountryProvider>
    </div>
  );
}

export default App;

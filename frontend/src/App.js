import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import View from "./pages/View";
import Add from "./pages/Add";
import Edit from "./pages/Edit";


function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<View />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;

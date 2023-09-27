import { Routes, Route } from "react-router-dom";
import { Create, Home, Update } from "./pages";
import { Navbar } from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="align-elements py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

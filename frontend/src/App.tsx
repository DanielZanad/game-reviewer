import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="bg-gray-950 w-screen h-screen text-white font-roboto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/page";
import Redirect from "./components/Redirect/page";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Redirect />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}


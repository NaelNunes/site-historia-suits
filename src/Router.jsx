import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/index";

import Main from "./pages/Main/index";
import About from "./pages/About/index";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup/index";
import Characters from "./pages/Characters/index";
import Layout from "./components/Layout/index";
import Footer from "./components/Footer/index";
import Site from "./pages/Site/index";

import Header from "./components/header/index";

export default function Router() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<RequireAuth element={<About />} />} />
          <Route path="site" element={<Site />} />
          <Route path="characters" element={<Characters />} />
        </Route>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

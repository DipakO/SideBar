import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import Servises from "./pages/Servises";
import Help from "./pages/Help";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Menu from "./components/Menu";
import Accordion from "./components/Accordion/Accordion";
import SimpleAccordion from "./components/Accordion/Accordion";
import BasicTabs from "./components/Tab/Tab";

const App = () => {
  const [condition, setCondition] = useState(false);
  const stateLift = (open) => {
    // console.log(open);
    setCondition(open);
  };
  return (
    <div>
      {/* <SimpleAccordion /> */}
      {/* <BasicTabs /> */}
      <BrowserRouter>
        <SideBar stateLift={stateLift} />
        {condition === false ? (
          <Main />
        ) : (
          <Routes>
            <Route path="/home" element={<SimpleAccordion />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sendemail" element={<Servises />} />
            <Route path="/help" element={<Help />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;

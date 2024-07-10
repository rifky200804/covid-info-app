import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle.js";
import theme from "./utils/constants/theme.js";
import data from "./utils/constants/provinces.js";
import ProvinceContext from "./context/ProvinceContext.jsx";
import { useState } from "react";
import Home from "./pages/Home";
import Province from "./pages/Province";
import Indonesia from "./pages/Indonesia"
import AboutUs from "./pages/AboutUs";
function App() {
  const [provinces, setProvinces] = useState(data.provinces);
  const contextValue = {
    provinces,
    setProvinces,
  };
  return (
    <>
        <ThemeProvider theme={theme}>
          <ProvinceContext.Provider value={contextValue}>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/indonesia" element={<Indonesia />} />
              <Route path="/provinsi" element={<Province />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </ProvinceContext.Provider>
        </ThemeProvider>
    </>
  );
}

export default App;

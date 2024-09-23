import { useEffect, useState } from "react";
import Api from "./Api";
import Navbar from "./Navbar";

const App = () => {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const handleThemeToggle = () => {
    setTemaOscuro((prevMode) => !prevMode);
    // console.log("Theme toggled");
  };

  useEffect(() => {
    if (temaOscuro) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
  return (
    <>
      <Navbar temaOscuro={temaOscuro} cambioTema={handleThemeToggle} />
      {/* <Api /> */}
    </>
  );
};

export default App;

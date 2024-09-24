import { useEffect, useState } from "react";
import Content from "../Content";
import "./Api.css";

const transformarObjeto = (objeto) => {
  return Object.entries(objeto).map(
    ([clave, valor]) =>
      `${clave}: ${Array.isArray(valor) ? valor.join(", ") : valor}`
  );
};

const Api = () => {
  const [hero, setHero] = useState({
    id: "",
    nombre: "",
    genero: "",
    imagen: "",
    estadisticas: [],
    biografia: [],
  });

  const [heroName, setHeroName] = useState("");
  const key = "3fe513f1323a8c9a19d1f066a834dd3a";

  const fetchDataHero = async (heroName) => {
    try {
      const response = await fetch(
        `https://superheroapi.com/api.php/${key}/search/${heroName}`
      );
      const data = await response.json();

      if (data.response === "success") {
        const primerHeroe = data.results[0];
        const estadisticas = transformarObjeto(primerHeroe.powerstats);
        const biografia = transformarObjeto(primerHeroe.biography);
        setHero({
          id: primerHeroe.id,
          nombre: primerHeroe.name,
          imagen: primerHeroe.image.url,
          estadisticas: estadisticas,
          biografia: biografia,
        });
      } else {
        console.log("Héroe no encontrado");
        setHero({
          id: "",
          nombre: "",
          genero: "",
          imagen: "",
          estadisticas: [],
          biografia: [],
        }); // Limpia el estado si no se encuentra el héroe
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (e) => {
    setHeroName(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && heroName.trim()) {
      fetchDataHero(heroName);
    }
  };

  useEffect(() => {
    if (hero.nombre) {
      console.log(`Héroe encontrado: ${hero.nombre}`);
    }
  }, [hero.nombre]); // Se agrega hero.nombre como dependencia

  return (
    <div className="contenedor">
      <Content
        estadisticas={hero.estadisticas}
        biografia={hero.biografia}
        genero={hero.genero}
        id={hero.id}
        nombre={hero.nombre}
        imagen={hero.imagen}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Api;

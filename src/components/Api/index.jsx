import { useEffect, useState } from "react";
// import Tarjetas from "../Tarjetas";
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
  });

  const key = "3fe513f1323a8c9a19d1f066a834dd3a";
  useEffect(() => {
    const fetchData = async (heroId) => {
      try {
        const response = await fetch(
          `https://superheroapi.com/api.php/${key}/${heroId}`
        );
        const data = await response.json();

        console.log(data);

        const estadisticas = transformarObjeto(data.powerstats);
        setHero({
          id: data.id,
          nombre: data.name,
          genero: data.appearance.gender,
          imagen: data.image.url,
          estadisticas: estadisticas,
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData(11);
  }, []);
  return (
    <div className="contenedor">
      <Content
        estadisticas={hero.estadisticas}
        genero={hero.genero}
        id={hero.id}
        nombre={hero.nombre}
        imagen={hero.imagen}
      />
    </div>
  );
};

export default Api;

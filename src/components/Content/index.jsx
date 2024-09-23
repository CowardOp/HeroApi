import "./Content.css";
import Tarjetas from "../Tarjetas";
const Content = ({ id, genero, nombre, estadisticas, imagen }) => {
  return (
    <div className="contenedor">
      <div className="input_content">
        <input
          type="text"
          autoComplete="none"
          placeholder="Ingrese un nombre de heroe"
        />
      </div>
      <div className="tarjeta_content">
        <Tarjetas
          estadisticas={estadisticas}
          gender={genero}
          name={nombre}
          id={id}
          image={imagen}
        />
      </div>
    </div>
  );
};

export default Content;

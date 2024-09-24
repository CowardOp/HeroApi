import "./Content.css";
import Tarjetas from "../Tarjetas";

const Content = ({
  id,
  genero,
  nombre,
  estadisticas,
  imagen,
  onSearch,
  onInputChange,
}) => {
  return (
    <div className="contenedor">
      <div className="input_content">
        <input
          type="text"
          autoComplete="off"
          placeholder="Ingrese un nombre de héroe"
          onChange={onInputChange} // Actualiza el valor del input
          onKeyDown={onSearch} // Detecta cuando se presiona una tecla
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

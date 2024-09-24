import "./Tarjetas.css";

const Tarjetas = ({ id, name, image, estadisticas, biografia }) => {
  return (
    <div className="contenedor_tarjeta">
      <div className="tarjeta">
        <div className="encabezado">
          <span>{id}</span>
          <div className="contenedor_img">
            <img src={image} alt={name} />
          </div>
          <h2>{name}</h2>
        </div>
        <div className="cuerpo">
          <ul className="cuerpo_lista">
            {Array.isArray(estadisticas) && estadisticas.length > 0 ? (
              estadisticas.map((stat, index) => <li key={index}>{stat}</li>)
            ) : (
              <li>No hay estadísticas disponibles</li>
            )}
          </ul>
          <ul className="cuerpo_lista">
            {Array.isArray(biografia) && biografia.length > 0 ? (
              biografia.map((stat, index) => <li key={index}>{stat}</li>)
            ) : (
              <li>No hay biografía disponible</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;

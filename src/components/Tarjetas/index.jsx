import "./Tarjetas.css";

const Tarjetas = ({ id, name, image, gender, estadisticas }) => {
  return (
    <>
      <div className="contenedor">
        <div className="">
          <span>{id}</span>
          <img src={image} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{gender}</p>
          <ul>
            {Array.isArray(estadisticas) && estadisticas.length > 0 ? (
              estadisticas.map((stat, index) => <li key={index}>{stat}</li>)
            ) : (
              <li>No hay estadísticas disponibles</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;

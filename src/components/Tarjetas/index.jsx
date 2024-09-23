const Tarjetas = ({ name, image, gender }) => {
  return (
    <>
      <div className="contenedor">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{gender}</p>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;

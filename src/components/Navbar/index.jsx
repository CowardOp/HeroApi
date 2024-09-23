import logoNegro from "../../img/logo-negro.png";
import logoBlanco from "../../img/logo-blanco.png";
import "./Navbar.css";
const Navbar = ({ temaOscuro, cambioTema }) => {
  return (
    <div>
      <div className="header">
        <div className="header_imagen">
          <img
            className={`logo ${temaOscuro ? "negro" : "blanco"}`}
            src={temaOscuro ? logoBlanco : logoNegro}
            alt={temaOscuro ? "logo-blanco" : "logo-negro"}
          />
        </div>
        <div className="header_theme">
          <input
            type="checkbox"
            checked={temaOscuro}
            onChange={cambioTema}
            value="synthwave"
            className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

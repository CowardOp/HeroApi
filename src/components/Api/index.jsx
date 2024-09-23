import { useEffect, useState } from "react";
import Tarjetas from "../Tarjetas";

const Api = () => {
  const [data, setData] = useState(null);

  const key = "3fe513f1323a8c9a19d1f066a834dd3a";
  useEffect(() => {
    const fetchData = async (heroId) => {
      try {
        const response = await fetch(
          `https://superheroapi.com/api.php/${key}/${heroId}`
        );
        const data = await response.json();

        console.log(data);

        setData(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData(12);
  }, []);
  return (
    <>
      <Tarjetas
        gender={data.appearance.gender}
        image={data.image.url}
        name={data.name}
      />
    </>
  );
};

export default Api;

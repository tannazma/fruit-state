import { useEffect, useState } from "react";

const AnimalListFromAPI = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getAnimalFromApi = async () => {
      const animalsResponse = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      const animalsData = await animalsResponse.json();
      console.log(animalsData);
    };

    getAnimalFromApi();
  }, []);

  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </>
  );
};
export default AnimalListFromAPI;

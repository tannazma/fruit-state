import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Animal {
  age: number;
  farm: number;
  hasBeenFed: boolean;
  id: number;
  imgUrl: string;
  kind: string;
  name: string;
}

const AnimalDetailPage = () => {
  const router = useRouter();
  const idFromUrl = router.query.id;
  const [getAnimal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(idFromUrl);
      if (idFromUrl === undefined) {
        return; // Stop execution here
      }
      const response = await fetch(
        `https://reader.mindmingle.nl/api/exercises/react/farm-animals/${idFromUrl}`
      );
      const data = await response.json();
      setAnimal(data);
      // console.log(data);
    };
    fetchData();
  }, [idFromUrl]);

  return (
    <>
      <h1>Animal Page {idFromUrl}</h1>
      <li>
        {getAnimal === null ? (
          <div> Not found</div>
        ) : (
          <div>{getAnimal?.name}</div>
        )}
      </li>
    </>
  );
};

export default AnimalDetailPage;

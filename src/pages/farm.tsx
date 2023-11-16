// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface farmWeatherInterface {
  date: string;
  temperature: number;
  weatherIcon: string;
  title: string;
  description: string;
}

const FarmWeather = () => {
  const [getWeather, setWeather] = useState<farmWeatherInterface[] | null>(
    null
  );

  // const router=useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react/weather"
      );
      const data = await response.json();
      setWeather(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome to farm weather</h1>
      {getWeather?.map((weather) => (
        <li key={weather.title}>{weather.description}</li>
      ))}
    </>
  );
};

export default FarmWeather;

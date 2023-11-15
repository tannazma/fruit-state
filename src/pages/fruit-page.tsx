//   Create a component that displays a list of all the fruits' names from the fruits array.

import React from "react";
import { Fruit, fruits } from "../data/fruits";
import { useState } from "react";

// Create a component that displays a list of fruits with a button next to each fruit. When the button is clicked, the availability of the fruit should be toggled.
const FruitList = () => {
  const [getFruitList, setFruitList] = useState<Fruit[]>(fruits);

  const toggleAvailability = (id: number) => {
    // console.log(id);
    setFruitList(
      getFruitList.map((fruit: Fruit) =>
        fruit.id === id ? { ...fruit, isAvailable: !fruit.isAvailable } : fruit
      )
    );
  };

//   console.log(getFruitList);

  return (
    <>
      <ul>
        {getFruitList.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}
            <p>{fruit.isAvailable ? "✅" : "❌"}</p>
            <button onClick={() => toggleAvailability(fruit.id)}>
              Clear Fruit List
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FruitList;

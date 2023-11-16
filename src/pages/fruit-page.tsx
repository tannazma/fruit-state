//   Create a component that displays a list of all the fruits' names from the fruits array.

import React from "react";
import { Fruit, fruits } from "../data/fruits";
import { useState } from "react";
import { NextMiddleware } from "next/server";

// Create a component that displays a list of fruits with a button next to each fruit. When the button is clicked, the availability of the fruit should be toggled.
const FruitList = () => {
  const [getFruitList, setFruitList] = useState<Fruit[]>(fruits);
  const [getSearchText, setSearchText] = useState("");
  const [getCheckBox, setCheckBox] = useState(false);
  //   console.log(getSearchText);

  const toggleAvailability = (id: number) => {
    // console.log(id);
    setFruitList(
      getFruitList.map((fruit: Fruit) =>
        fruit.id === id ? { ...fruit, isAvailable: !fruit.isAvailable } : fruit
      )
    );
  };

  const inputSearch = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setSearchText((event.target as HTMLInputElement).value);
  };
  const toggleCheckBox = () => {
    setCheckBox(!getCheckBox);
  };
  // console.log(getCheckBox)
  //   console.log(getFruitList);

  return (
    <>
      <input value={getSearchText} onInput={inputSearch} />
      <br />
      <input type="checkbox" onChange={toggleCheckBox} /> only available
      <ul>
        {getFruitList
          .filter((fruit) => fruit.name.includes(getSearchText))
          .filter((fruit) => (getCheckBox ? fruit.isAvailable === true : true))
          .map((fruit) => (
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

import { useState } from "react";

type AnimalKind = "cow" | "sheep" | "chicken" | "pig";

interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
}

const animals: Animal[] = [
  { id: 1, name: "Bessie", kind: "cow", age: 4, hasBeenFed: false },
  { id: 2, name: "Dolly", kind: "sheep", age: 2, hasBeenFed: true },
  { id: 3, name: "Cluck", kind: "chicken", age: 1, hasBeenFed: true },
  { id: 4, name: "Porky", kind: "pig", age: 3, hasBeenFed: false },
  { id: 5, name: "Maggie", kind: "cow", age: 5, hasBeenFed: true },
  { id: 6, name: "Bo", kind: "sheep", age: 1, hasBeenFed: false },
  { id: 7, name: "Nugget", kind: "chicken", age: 2, hasBeenFed: false },
  { id: 8, name: "Wilbur", kind: "pig", age: 2, hasBeenFed: true },
  { id: 9, name: "Bella", kind: "cow", age: 7, hasBeenFed: true },
  { id: 10, name: "Fluffy", kind: "sheep", age: 3, hasBeenFed: true },
  { id: 11, name: "Wings", kind: "chicken", age: 1, hasBeenFed: false },
  { id: 12, name: "Babe", kind: "pig", age: 1, hasBeenFed: true },
  { id: 13, name: "Moo", kind: "cow", age: 3, hasBeenFed: false },
  { id: 14, name: "Fleece", kind: "sheep", age: 4, hasBeenFed: false },
  { id: 15, name: "Feathers", kind: "chicken", age: 2, hasBeenFed: true },
  { id: 16, name: "Piglet", kind: "pig", age: 4, hasBeenFed: true },
];

// Add state to your AnimalsList that will hold the arrays of animals
// If the animal.hasBeenFed is equal to false, show a button that says 'Feed'
// When the user clicks that button, update the state and change hasBeenFed to true for that animal

const AnimalsList = (animal: Animal) => {
  const [getAnimals, setAnimals] = useState<Animal[]>(animals);

  const handelFeedAnimals = (id: number) => {
    setAnimals(
      getAnimals.map((animal: Animal) =>
        animal.id === id ? { ...animal, hasBeenFed: true } : animal
      )
    );
    console.log(getAnimals);
  };

  return (
    <>
      <ul key={animal.id}>
        {getAnimals.map((animal) => (
          <li>
            {animal.name}
            {animal.hasBeenFed === false ? (
              <button onClick={() => handelFeedAnimals(animal.id)}>Feed</button>
            ) : (
              "  Feed  "
            )}
            {animal.hasBeenFed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AnimalsList;

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


interface AnimalListItemProps {
  animal: Animal;
}

const animalButton = () => {
  alert("You've clicked me!");
};

const AnimalFeed = ({ animal }: AnimalListItemProps) => {
  return (
    <>
      <p>
        {/* <img src="/happy-animal.png" /> */}
        {animal.hasBeenFed ? "I am happy 😌" : "I am hungry  🥺"}
        {animal.hasBeenFed && "I'm full Yaaay🌞 "}
      </p>
      <button onClick={animalButton}>🚨</button>
    </>
  );
};

const AnimalListItem = ({ animal }: AnimalListItemProps) => {
  const getEmoji = (kind: AnimalKind) => {
    switch (kind) {
      case "cow":
        return "🐮";
      case "sheep":
        return "🐑";
      case "chicken":
        return "🐔";
      case "pig":
        return "🐷";
      default:
        return "";
    }
  };
  // const animalFromFind = animals.find((animal) => animal.name === "Feathers");
  const animalEmoji = getEmoji(animal.kind);
  return (
    <>
      <li>
        <h2>{animal.name}</h2>
        <h3>{animalEmoji}</h3>
        <p>{`I am a ${animal.age} year old ${animal.kind}!`}</p>
        {/* <p>
          {animalFromFind === undefined
            ? "couldn't find the animal!"
            : `Today in the spotlight: ${animalFromFind?.name} the
            ${animalFromFind?.kind}`}
        </p> */}
        <AnimalFeed animal={animal} />
      </li>
    </>
  );
};

interface AnimalsListProps {
  kind: AnimalKind;
}
const AnimalsList = ({ kind }: AnimalsListProps) => {
  return (
    <>
      <ul>
        {animals
          .filter((animal) => animal.kind === "chicken" || "cow")
          .sort((animalA, animalB) => animalA.age - animalB.age)
          .map((animal) => {
            return <AnimalListItem key={animal.id} animal={animal} />;
          })}
      </ul>
    </>
  );
};

const Animals = () => {
  return (
    <div>
      <h1>Welcome to the farm!</h1>
      <section>
        <h2>Our Cows</h2>
        <AnimalsList kind="cow" />
      </section>
      <section>
        <h2>Our Chickens</h2>
        <AnimalsList kind="chicken" />
      </section>
      <section>
        <h2>Our Sheeps</h2>
        <AnimalsList kind="sheep" />
      </section>
      <section>
        <h2>Our Pigs</h2>
        <AnimalsList kind="pig" />
      </section>
    </div>
  );
};

export default Animals;

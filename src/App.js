import { Fragment, useState } from "react";
import Navbar from "./components/UI/Navbar";
import ProductsList from "./components/Products/ProductsList";
import Form from "./components/AddProduct/Form";

const productsArray = [
  {
    title: "Star Wars: Master & Apprentice",
    author: "Claudia Gray",
    description:
      "An unexpected offer threatens the bond between Qui-Gon Jinn and Obi-Wan Kenobi as the two Jedi navigate a dangerous new planet and an uncertain future in the first canon Star Wars novel to take place before the events of Star Wars: The Phantom Menace.",
    price: "28.99",
    category: "sci-fi",
    picture: "https://images.penguinrandomhouse.com/cover/9780525619376",
    ageRestriction: "16+",
    rating: "6.77",
  },
  {
    title: "The Witcher: Blood Of Elves",
    author: "Andrzej Sapkowski",
    description:
      "For more than a hundred years, humans, dwarves, gnomes and elves lived together in relative peace. But times have changed, the uneasy peace is over and now the races are fighting once again - killing their own kind and each other. Into this tumultuous time is born a child of prophecy, Ciri, surviving heiress of a bloody revolution, whose strange abilities can change the world - for good, or for evil... As the threat of war hangs over the land, Geralt the Witcher must protect Ciri from those who are hunting the child for her destructive power. But this time, Geralt may have met his match.",
    price: "29.99",
    category: "fantasy",
    picture: "https://productimages.worldofbooks.com/1473231078.jpg",
    ageRestriction: "16+",
    rating: "9.21",
  },
  {
    title: "Behind Enemy Lies",
    author: "Patrick Cockburn",
    description:
      "A journalistic account of Trump’s wars in the Middle East from a highly acclaimed journalist who has been reporting on the area for decades",
    price: "21.99",
    category: "politics",
    picture: "https://images1.penguinrandomhouse.com/cover/9781839763960",
    ageRestriction: "18+",
    rating: "5.09",
  },
  {
    title: "FOODHEIM",
    author: "Eric Wareheim",
    description:
      "From one half of the cult comedy duo Tim & Eric comes the culinary bible for modern food freaks, showing you how to throw epic parties, suck the marrow out of life, and cook better than your grandmother.",
    price: "25",
    category: "cooking",
    picture: "https://images1.penguinrandomhouse.com/cover/9781984858528",
    ageRestriction: "12+",
    rating: "8.31",
  },
  {
    title: "Home Before Dark",
    author: "Riley Sager",
    description:
      "A haunted house story—with a twist….[Sager] does not hold back”(Rolling Stone) in this chilling thriller from the author of Final Girls and Survive the Night.",
    price: "17",
    category: "horror",
    picture: "https://images4.penguinrandomhouse.com/cover/9781524745196",
    ageRestriction: "18+",
    rating: "7.97",
  },
  {
    title: "Pony",
    author: "R. J. Palacio",
    description:
      "An enthralling adventure that will show readers how to choose courage. A modern classic about a boy on a quest to rescue his father, with only a ghost as his companion and a mysterious pony as his guide.",
    price: "18.99",
    category: "kids",
    picture: "https://images2.penguinrandomhouse.com/cover/9780553508116",
    ageRestriction: "6+",
    rating: "8.96",
  },
];

function App() {
  const [filteredArray, setFilteredArray] = useState(productsArray);

  const removeHandler = (title) => {
    setFilteredArray(filteredArray.filter((item) => item.title !== title));
  };

  const addHandler = (book) => {
    console.log(book);
    const arrayWithAddedBook = [...filteredArray, book];
    setFilteredArray(arrayWithAddedBook);
  };

  return (
    <Fragment>
      <Navbar />
      <Form addHandler={addHandler} />
      <ProductsList
        productsArray={filteredArray}
        removeHandler={removeHandler}
      />
    </Fragment>
  );
}

export default App;

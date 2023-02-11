import { useState } from "react";
import "./App.css";

function App() {
  const JSArray = [
    {
      item: "Sandwich",
      ingredients: [
        "bread",
        "milk",
        "tomato",
        "butter",
        "onion",
        "cucumber",
        "salt",
      ],
    },
    {
      item: "Cake",
      ingredients: [
        "flour",
        "sugar",
        "chocolate",
        "oil",
        "salt",
        "baking powder",
      ],
    },
    {
      item: "Milkshake",
      ingredients: ["milk", "ice", "sugar", "icecream", "strawberry"],
    },
  ];

  return (
    <div className="App">
      <h1>List of Items</h1>
      <div>
        <ul>
          {JSArray.map((items) => {
            return <li style={{listStyleType: 'none'}}>
              <h2>{items.item}</h2>
              <p>{items.ingredients.map(ingredient => <li style={{listStyleType: 'square'}}>{ingredient}</li>)}</p>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

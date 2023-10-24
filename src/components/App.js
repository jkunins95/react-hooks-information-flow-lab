import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {

  return (
    <div className="App">
      <Header />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

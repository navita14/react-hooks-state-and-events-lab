import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

    // replace 'false' with a state variable that can be toggled between true and false
    // this will be used for the Dark Mode Toggle feature
      // const appClass = isDarkMode ? "App dark" : "App light" and then enter this in ClassName



  export default function App() {
    const [isDarkMode,setIsDarkMode] = useState(false);
    
    function handleClick(){
      setIsDarkMode(preVal =>!preVal)       ////or (!isDarkMode)
    }
        
    return (
      <div className={isDarkMode ? "App dark" : "App light"}> 
        <header>
          <h2>Shopster</h2>
          <button onClick={handleClick}>{isDarkMode ? "App dark" : "App light"}</button>
        </header>
        <ShoppingList items={itemData} />
      </div>
    );
}


import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


const dictionary=[

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]


function App() {
  const [text,setText]=useState("")
  const [defination,setDefination]=useState("")
  const handleChange=()=>{

    setDefination("")
    const searchTerm = text.trim().toLowerCase();

    const foundWord = dictionary.find(item => item.word.toLowerCase() === searchTerm);

    if (foundWord) {
      setDefination(foundWord.meaning);
      return;
    }
    

    setDefination((prevDefination) => {
      if (prevDefination === "") {
        return "Word not found in the dictionary.";
      }
      
      return prevDefination;
    });


  }
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleChange}>Search</button>
      <h3><strong>Definition:</strong></h3>
      <p>{defination}</p>
    </div>
  );
}

export default App;
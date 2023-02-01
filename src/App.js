//import components
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";

import { useState, useEffect } from "react";
import 'normalize.css';
import './App.css';


function App() {
  let input;
  const [relations, setRelations] = useState([[1,2], [2,3], [3,4], [2,4], [1,3]]);
  const [rawInput, setRawInput] = useState([[1,2], [2,3], [3,4], [2,4], [1,3]]);

  useEffect(
    () => {
      document.title = 'Are U In A Relationship?';
      input = 
      document.getElementById('setInput').value;
    }, []
  )

    function convertRelations() {
      let text = (document.getElementById('setInput')).value;
      setRawInput(text);
      let newText = text.slice();
      let onlyNumbers = newText.replace(/\D/g, '');
      console.log(newText);
      onlyNumbers.split('');
      let relations = groupByTwo(onlyNumbers);
      return relations;
    }

    function sendRelationsToOutput() {
      let relations = convertRelations();
      setRelations(relations);
    }

    function groupByTwo(array) {
      let iterations = array.length / 2;
      let groupedByTwo = [];
      let lastStartingvalue = -1;
      for (let index = 0; index < iterations; index++) {
        let grouped = [array[lastStartingvalue + 1], array[lastStartingvalue + 2]];
        groupedByTwo.push(grouped);
        lastStartingvalue = lastStartingvalue + 2;
      }

      return groupedByTwo;
    }

  return (
    <div className="App">
      <Header></Header>

      <div className="textInputArea">
        <Input></Input>
      </div>
      <button onClick={sendRelationsToOutput}>Check For Relations</button>
      <Output sampleArray={relations} rawInput={rawInput}></Output>

      <footer style={{
        background: "black",
        color: "white"
      }}>
        <p>Bug fixed: Antisymmetric finally works now, and application tests transitivity! If you noticed a bug, you can <a style={{
          color: "gold"
        }} href="mailto:2solimanleeryan@gmail.com">email me to let me know</a>.</p>
      </footer>
    </div>
  );
}

export default App;

import Header from "./components/header/header";
import Inputinfo from "./components/inputInfo/inputInfo";
import Resultdata from "./components/resultData/resultData";
import { useState } from "react";


function App() {
  const [values, setValues] = useState([]);
  const [target, setTarget] = useState(false);
  function changeValues(values, index, newValue) {
    if (index === 3 && (newValue < 1 && newValue !== '')) {
      setTarget(true);
    } else {
      setTarget(false);
    }
    setValues((values) => {
      const newSet = [...values];
      newSet[index] = newValue;
      
      
      return newSet;
    });
  }
  const allValuesComplete = values.every(value => value !== undefined && value !== null && !isNaN(value));

  return (
    <>
      <main className="mainContainer">
        <Header />
        <div className="inputContainer">
          <Inputinfo values={values} onSelect={changeValues}></Inputinfo>
          {target ? <p className="pp">INVALID DURATION</p> : undefined}

        </div>
        <div className="resultContainer">

        {allValuesComplete ? <Resultdata values={values} /> : null}
        </div>
      </main>
    </>
  );
}

export default App;

import Header from "./components/header/header";
import Inputinfo from "./components/inputInfo/inputInfo";
import Resultdata from "./components/resultData/resultData";
import { useState } from "react";


function App() {
  const [values, setValues] = useState([]);
  function changeValues(values, index, newValue) {

    setValues((values) => {
      const newSet = [...values];
      newSet[index] = +newValue;
      
      
      return newSet;
    });
  }

  const isDuration = values[3] < 1;
  const allValuesComplete = values.every(value => value !== undefined && value !== null && !isNaN(value));

  return (
    <>
      <main className="mainContainer">
        <Header />
        <div className="inputContainer">
          <Inputinfo values={values} onSelect={changeValues}></Inputinfo>
          {isDuration ? <p className="pp">INVALID DURATION</p> : undefined}

        </div>
        

        {allValuesComplete ? <Resultdata values={values} /> : null}
      </main>
    </>
  );
}

export default App;
